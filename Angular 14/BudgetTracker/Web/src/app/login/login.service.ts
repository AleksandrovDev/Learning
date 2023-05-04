import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;
  isAdmin = false;

  constructor() {}

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
      // this.router.navigate(['/accounts', 'add']);
      // this.router.navigateByUrl('/accounts/add');
    } else if (email === 'user@gmail.com' && password === 'user') {
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
