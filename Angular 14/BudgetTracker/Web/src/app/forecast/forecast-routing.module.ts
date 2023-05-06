import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast.component';

const routes: Routes = [{ path: '', component: ForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }

// use ng g m forecast --route=forecast --routing --module=app
// to create module with lazy loading