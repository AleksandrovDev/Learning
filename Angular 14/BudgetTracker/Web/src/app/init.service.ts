import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root', 
  // root means that you can use this service anywhere inside your application
  // and this is singleton
})
export class InitService {
  constructor(private readonly http: HttpClient) {}
  config: any;

  init() {
    return this.http
      .get('/assets/config.json')
      .pipe(tap((config) => (this.config = config)));
  }
}
