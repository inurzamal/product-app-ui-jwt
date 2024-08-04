// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistrationDto } from '../models/user-registration-dto';
import { UserLoginDto } from '../models/user-login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(user: UserRegistrationDto): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(user: UserLoginDto): Observable<string> {
    return this.http.post(`${this.apiUrl}/token`, user, { responseType: 'text' });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
