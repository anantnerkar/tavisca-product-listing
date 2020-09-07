import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private errMessage: string;
  get errorMessage(): string {
    return this.errMessage;
  }
  set errorMessage(message: string) {
    this.errMessage = message;
  }

  constructor(private http: HttpClient) {
    this.errorMessage = '';
   }

  login(user: User): Observable<User[]>{
    const loginUrl = encodeURI('users?email=' + user.email + '&password=' + user.password);
    return this.http.get<User[]>(`${environment.apiUrl}` + loginUrl);
  }

  signUp(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const signUpUrl = encodeURI('users');
    return this.http.post<User>(`${environment.apiUrl}` + signUpUrl, user, httpOptions);
  }

}
