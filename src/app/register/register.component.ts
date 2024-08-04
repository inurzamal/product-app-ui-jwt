// src/app/auth/register/register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationDto } from '../models/user-registration-dto';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationData: UserRegistrationDto = {
    name: '',
    email: '',
    password: '',
    roles: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.registrationData).subscribe(response => {
      console.log('User registered successfully', response);
      this.router.navigate(['/login']);
    });
  }
}
