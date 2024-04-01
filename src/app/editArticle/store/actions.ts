import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ArticleRequestInterface } from 'src/app/shared/types/articleRequest.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const editArticleActions = createActionGroup({
  source: 'edit article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article Success': props<{ article: ArticleInterface }>(),
    'Get article Failure': emptyProps(),

    'Edit article': props<{ request: ArticleRequestInterface; slug: string }>(),
    'Edit article Success': props<{ article: ArticleInterface }>(),
    'Edit article Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
