import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppState, selectAuthState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Logout } from '../../store/actions/user.actions';
import { Book } from '../../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  getState: Observable<any>;
  isAuthenticated: false;
  books: Book[];
  user = null;
  errorMessage = null;
  isDarkTheme = false;

  constructor(private authService: AuthService, 
              private store: Store<AppState>,
              private router: Router) {
                this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    //this.isLoggedIn = false;

    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }

  public gotoLogin(): void {
    this.router.navigateByUrl('login');
  }

  public gotoSignUp(): void {
    this.router.navigateByUrl('sign-up');
  }
  
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

}