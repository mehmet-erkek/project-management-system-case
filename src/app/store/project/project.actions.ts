import { createAction, props } from '@ngrx/store';
import { Project } from '../../models/project.model';



export const loadProjects = createAction('[Project] Load Projects');
export const loadProjectsSuccess = createAction('[Project] Load Projects Success', props<{ projects: Project[] }>());
export const loadProjectsFailure = createAction('[Project] Load Projects Failure', props<{ error: any }>());

export const addProject = createAction(
  '[Project] Add Project',
  props<{ project: Project }>()
);
export const addProjectSuccess = createAction(
  '[Project] Add Project Success',
  props<{ project: Project }>()
);
export const addProjectFailure = createAction(
  '[Project] Add Project Failure',
  props<{ error: any }>()
);

export const updateProject = createAction(
  '[Project] Update Project',
  props<{ project: Project }>()
);
export const updateProjectSuccess = createAction(
  '[Project] Update Project Success',
  props<{ project: Project }>()
);
export const updateProjectFailure = createAction(
  '[Project] Update Project Failure',
  props<{ error: any }>()
);


export const deleteProject = createAction('[Project] Delete Project', props<{ id: number }>());
export const deleteProjectSuccess = createAction('[Project] Delete Project Success', props<{ id: number }>());
export const deleteProjectFailure = createAction('[Project] Delete Project Failure', props<{ error: any }>());

export const getProjectById = createAction(
  '[Project Detail] Get Project By Id',
  props<{ id: number }>()
);

export const getProjectByIdSuccess = createAction(
  '[Project Detail] Get Project By Id Success',
  props<{ project: Project }>()
);

export const getProjectByIdFailure = createAction(
  '[Project Detail] Get Project By Id Failure',
  props<{ error: any }>()
);
