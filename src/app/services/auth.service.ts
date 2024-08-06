// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserRegistrationDto } from '../models/user-registration-dto';
import { UserLoginDto } from '../models/user-login-dto';
import { AuthEventService } from './auth-event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private authEventService: AuthEventService) {}

  register(user: UserRegistrationDto): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(user: UserLoginDto): Observable<string> {
    return this.http.post(`${this.apiUrl}/token`, user, { responseType: 'text' }).pipe(
      tap((response: string) => {
        localStorage.setItem('token', response);
        this.authEventService.setAuthStatus(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authEventService.setAuthStatus(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
