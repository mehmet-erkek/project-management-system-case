import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';
import { Task } from '../../models/task.model';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTaskById = (taskId: number) =>
  createSelector(
    selectAllTasks,
    (tasks: Task[]) => tasks.find(task => task.id === taskId)
  );

export const selectTasksByProjectId = (projectId: number) =>
  createSelector(
    selectAllTasks,
    (tasks: Task[]) => tasks.filter(task => task.projectId === projectId)
  );

export const selectTaskLoading = createSelector(
  selectTaskState,
  (state: TaskState) => state.loading
);

export const selectTaskError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);
