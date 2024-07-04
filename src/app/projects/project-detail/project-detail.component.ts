import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { Task } from '../../models/task.model';
import { AppState } from '../../store/app.state';
import { getProjectById } from '../../store/project/project.actions';
import { selectProjectById } from '../../store/project/project.selectors';
import { selectTasksByProjectId } from '../../store/task/task.selectors';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project> | undefined;
  tasks$: Observable<Task[]> | undefined;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project$ = this.store.select(selectProjectById(projectId));
    this.tasks$ = this.store.select(selectTasksByProjectId(projectId));
    
    this.store.dispatch(getProjectById({ id: projectId }));
  }
}
