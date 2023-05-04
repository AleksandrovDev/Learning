import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any',
  // any means that it will create new instance
  // on every dependancy injection in each LAZY LOADED module
  // and you can register it in deifferent lazy modules with different values
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private readonly routeConfig: RouteConfig) {
    console.log('ConfigService initialized');
    console.log(this.routeConfig);
  }
}
