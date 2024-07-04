import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

export const selectProjectState = createFeatureSelector<ProjectState>('project');

export const selectAllProjects = createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects
);

export const selectProjectById = (projectId: number) => createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects.find(project => project.id === projectId)
);
