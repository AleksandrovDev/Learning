import { Component } from '@angular/core';

@Component({
  selector: 'budget-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  email = '';
  password = '';

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      alert('Login successfull');
    }
  }
}
