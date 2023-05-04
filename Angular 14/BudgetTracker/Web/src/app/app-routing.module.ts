import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'month-view',
    loadChildren: () =>
      import('./month-view/month-view.module').then((m) => m.MonthViewModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./account-list/account-list.module').then(
        (m) => m.AccountListModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'forecast', loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule) },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
