import { createFeature, createReducer, on } from '@ngrx/store';
import { createArticleActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleFeature = createFeature({
  name: 'create article',
  reducer: createReducer(
    initialState,
    on(createArticleActions.createArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(createArticleActions.createArticleResult, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors !== undefined ? action.errors : null,
    })),
    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = createArticleFeature;
