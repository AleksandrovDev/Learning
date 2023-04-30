import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
    // return sessionStorage; // if you want to create session storage
  },
});
