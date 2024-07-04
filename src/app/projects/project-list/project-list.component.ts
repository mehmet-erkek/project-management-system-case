import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { AppState } from '../../store/app.state';
import { loadProjects, deleteProject } from '../../store/project/project.actions';
import { selectAllProjects } from '../../store/project/project.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.projects$ = this.store.select(selectAllProjects);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }

  editProject(projectId: number): void {
    this.router.navigate(['/projects/edit', projectId]);
  }

  deleteProject(projectId: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      //this.store.dispatch(deleteProject({ id: projectId }));
    }
  }
}
