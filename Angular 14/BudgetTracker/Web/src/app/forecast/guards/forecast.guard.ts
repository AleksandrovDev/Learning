import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ForecastComponent } from '../forecast.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ForecastGuard implements CanDeactivate<unknown> {
  constructor(private readonly _snackBar: MatSnackBar) {}

  canDeactivate(
    component: ForecastComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (component.forecastForm.pristine) {
        return component.forecastForm.pristine;
      }

      this._snackBar.open('You have unsaved changes!', 'Discard');

    return false;
  }
}
