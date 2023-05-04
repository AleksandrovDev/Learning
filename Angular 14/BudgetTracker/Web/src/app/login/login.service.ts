import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  constructor() { }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
      // this.router.navigate(['/accounts', 'add']);
      // this.router.navigateByUrl('/accounts/add');
    }

    return this.isLoggedIn;
  }
}
