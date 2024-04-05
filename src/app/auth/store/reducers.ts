import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authsState.interface';
import { authActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailure, (state) => ({
      ...state,
      isLoading: false,
      currentUser: null,
    })),

    on(authActions.updateCurrentUserSuccess, (state, action) => ({
      ...state,
      currentUser: action.currentUser,
    })),

    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.registerResult, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser !== undefined ? action.currentUser : null,
      validationErrors: action.errors !== undefined ? action.errors : null,
    })),

    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.loginResult, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser !== undefined ? action.currentUser : null,
      validationErrors: action.errors !== undefined ? action.errors : null,
    })),

    on(authActions.logout, (state) => ({
      ...state,
      ...initialState,
      currentUser: null,
    })),

    on(routerNavigationAction, (state) => ({ ...state, validationErrors: null })),
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
