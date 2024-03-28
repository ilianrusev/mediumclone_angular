import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': props<{ errors: BackendErrorsInterface }>(),

    'Get current user': emptyProps(),
    'Get current user Success': props<{ currentUser: CurrentUserInterface }>(),
    'Get current user Failure': emptyProps(),
  },
});

// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>(),
// );

// export const registerSuccess = createAction(
//   '[Auth] Register Success',
//   props<{ currentUser: CurrentUserInterface }>(),
// );

// export const registerFailure = createAction(
//   '[Auth] Register Failure',
// );
