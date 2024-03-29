import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagsService } from '../services/popularTags.service';
import { popularTagActions } from './actions';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export const getPopularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagsService),
  ) => {
    return actions$.pipe(
      ofType(popularTagActions.getPopularTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagActions.getPopularTagsSuccess({ popularTags });
          }),
          catchError(() => {
            return of(popularTagActions.getPopularTagsFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
