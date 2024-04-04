import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProfileService } from '../services/userProfile.service';
import { userProfileActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserProfileInterface } from '../types/userProfile.interface';

export const getUserProfileEffect = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService),
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.getUserProfile),
      switchMap(({ slug }) => {
        return userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.getUserProfileFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const FollowUserProfileEffect = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService),
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.followUserProfile),
      switchMap(({ action, slug }) => {
        return userProfileService.followUnfollowUser(action, slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.followUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.followUserProfileFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
