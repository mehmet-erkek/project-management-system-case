import { createReducer, on } from '@ngrx/store';
import { Project } from '../../models/project.model';
import * as ProjectActions from './project.actions';

export interface ProjectState {
  projects: Project[];
  error: any;
}

export const initialState: ProjectState = {
  projects: [],
  error: null
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects
  })),
  on(ProjectActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProjectActions.addProjectSuccess, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project]
  })),
  on(ProjectActions.addProjectFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProjectActions.updateProjectSuccess, (state, { project }) => ({
    ...state,
    projects: state.projects.map(p => (p.id === project.id ? project : p))
  })),
  on(ProjectActions.updateProjectFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProjectActions.deleteProjectSuccess, (state, { projectId }) => ({
    ...state,
    projects: state.projects.filter(project => project.id !== projectId)
  })),
  on(ProjectActions.deleteProjectFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
