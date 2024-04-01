import { createFeature, createReducer, on } from '@ngrx/store';
import { editArticleActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { EditArticleStateInterface } from '../types/editArticleState.interface';

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
};

const editArticleFeature = createFeature({
  name: 'edit article',
  reducer: createReducer(
    initialState,
    on(editArticleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(editArticleActions.getArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      article: action.article,
    })),
    on(editArticleActions.getArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(editArticleActions.editArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(editArticleActions.editArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(editArticleActions.editArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: editArticleFeatureKey,
  reducer: editArticleReducer,
  selectArticle,
  selectIsSubmitting,
  selectIsLoading,
  selectValidationErrors,
} = editArticleFeature;
