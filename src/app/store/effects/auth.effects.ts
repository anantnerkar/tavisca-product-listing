// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
    AuthActionTypes,
    LogIn,
    LogInFailure,
    LogInSuccess,
    SignUp,
    SignUpSuccess
} from '../actions/user.actions';


@Injectable()
export class AuthEffects {
    /**
     *
     */
    constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router) { }
          @Effect({ dispatch: false })
          LogInSuccess: Observable<any> = this.actions.pipe(
            ofType(AuthActionTypes.LOGIN_SUCCESS),
            tap((user) => {
              localStorage.setItem('user', JSON.stringify(user.payload));
              this.router.navigateByUrl('/');
            })
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE),
        tap((err) => {
            this.authService.errorMessage = err.payload.error;
        })
    );

    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: LogIn) => action.payload),
        switchMap(payload => {
            return this.authService.login(payload).pipe(
                map((user) => {
                    if ( user.length > 0) {
                    return new LogInSuccess({ email: payload.email });
                    } else {
                        return new LogInFailure({ error: 'Invalid credentials' });
                    }
                }));
        }));

    @Effect({dispatch: false})
    SignUpSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP_SUCCESS),
        tap((user) => {
        localStorage.setItem('user', user.payload);
        this.router.navigateByUrl('/');
        })
    );
    /**
     * TODO: Combine signupFailure and login failure to create a single effect
     */
    @Effect({dispatch: false})
    SignUpFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP_FAILURE),
        tap((user) => {
        })
    );
    @Effect()
    SignUp: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP),
        map((action: SignUp) => action.payload),
        switchMap(payload => {
            return this.authService.signUp(payload).pipe(
                map((data) => {
                    return new SignUpSuccess(data);
                }));
        }));

    @Effect({dispatch: false})
    Logout: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem('user');
        })
    );

}
