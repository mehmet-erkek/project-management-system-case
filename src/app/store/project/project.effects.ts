import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProjectService } from '../../services/project.service';
import * as ProjectActions from './project.actions';

@Injectable()
export class ProjectEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      mergeMap(() =>
        this.projectService.getProjects().pipe(
          map(projects => ProjectActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectActions.loadProjectsFailure({ error })))
        )
      )
    )
  );

  addProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.addProject),
      mergeMap(action =>
        this.projectService.addProject(action.project).pipe(
          map(project => ProjectActions.addProjectSuccess({ project })),
          catchError(error => of(ProjectActions.addProjectFailure({ error })))
        )
      )
    )
  );

  updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.updateProject),
      mergeMap(action =>
        this.projectService.updateProject(action.project).pipe(
          map(project => ProjectActions.updateProjectSuccess({ project })),
          catchError(error => of(ProjectActions.updateProjectFailure({ error })))
        )
      )
    )
  );

  deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.deleteProject),
      mergeMap(action =>
        this.projectService.deleteProject(action.projectId).pipe(
          map(() => ProjectActions.deleteProjectSuccess({ projectId: action.projectId })),
          catchError(error => of(ProjectActions.deleteProjectFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
