import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const loadTasks = createAction('[Task] Load Tasks', props<{ projectId: number }>());
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: any }>()
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: Task }>()
);
export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ task: Task }>()
);
export const addTaskFailure = createAction(
  '[Task] Add Task Failure',
  props<{ error: any }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);
export const updateTaskSuccess = createAction(
  '[Task] Update Task Success',
  props<{ task: Task }>()
);
export const updateTaskFailure = createAction(
  '[Task] Update Task Failure',
  props<{ error: any }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ taskId: number }>()
);
export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success',
  props<{ taskId: number }>()
);
export const deleteTaskFailure = createAction(
  '[Task] Delete Task Failure',
  props<{ error: any }>()
);
