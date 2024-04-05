import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { createArticleActions } from './actions';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { Router } from '@angular/router';
import { CreateArticleService } from '../services/createArticle.service';
import { HttpErrorResponse } from '@angular/common/http';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createArticleService = inject(CreateArticleService),
  ) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticle),
      switchMap(({ request }) => {
        return createArticleService.createArticle(request).pipe(
          map((article: ArticleInterface) => {
            return createArticleActions.createArticleResult({ article });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              createArticleActions.createArticleResult({
                errors: error.error.errors,
              }),
            );
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticleResult),
      filter(({ article, errors }) => article !== undefined && !errors), // Only proceed when there is an article and no errors
      tap(({ article }) => {
        router.navigate(['/articles', article!.slug]);
      }),
    );
  },
  { functional: true, dispatch: false },
);
