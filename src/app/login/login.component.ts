// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from '../models/user-login-dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: UserLoginDto = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe({
      next: response => {
        localStorage.setItem('token', response);
        console.log('Login successful, token:', response);
        this.router.navigate(['/products']);
      },
      error: err => {
        console.error('Login failed', err);
      }
    });
  }
}
