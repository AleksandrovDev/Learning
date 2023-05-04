import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'budget-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  login() {
    const isLoggedIn = this.loginService.login(this.email, this.password);

    if (isLoggedIn) {
      this.router.navigate(['/accounts']);
    }
  }
}
