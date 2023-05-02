import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'budget-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private readonly router: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.router.navigate(['/accounts', 'add']);
      // this.router.navigateByUrl('/accounts/add');
    }
  }
}
