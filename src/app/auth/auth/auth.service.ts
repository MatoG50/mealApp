import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8lDyAEEvp90XMouLceL5t3hHBv7xuFCg',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
