import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  email?: string;
  password?: string;
  isLoginMode = true;

  constructor() {}

  toggleMode() {
  this.isLoginMode = !this.isLoginMode;
  }

  login() {
    console.log('Logging in:', this.email, this.password);
  }

  recoverPassword() {
    console.log('Recovering password for:', this.email);
  }
}
