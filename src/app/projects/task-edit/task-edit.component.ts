import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { AppState } from '../../store/app.state';
import { getTaskById, updateTask } from '../../store/task/task.actions';
import { selectTaskById } from '../../store/task/task.selectors';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number;
  task$: Observable<Task>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.paramMap.get('id');
    this.task$ = this.store.select(selectTaskById(this.taskId));

    this.task$.subscribe(task => {
      if (task) {
        this.taskForm = this.fb.group({
          title: [task.title, Validators.required],
          description: [task.description],
          assignee: [task.assignee],
          dueDate: [task.dueDate, Validators.required],
          status: [task.status, Validators.required]
        });
      }
    });

    this.store.dispatch(getTaskById({ id: this.taskId }));
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask: Task = {
        ...this.taskForm.value,
        id: this.taskId
      };
      this.store.dispatch(updateTask({ task: updatedTask }));
      this.router.navigate(['/projects', updatedTask.projectId]);
    }
  }
}
