import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'month-view',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./month-view/month-view.module').then((m) => m.MonthViewModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'accounts',
    canActivate: [LoginGuard],
    canLoad: [LoginGuard], // use only for lazy loading, restrict loading module
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
  {
    path: 'forecast/:accountId',
    // canActivate: [LoginGuard],
    loadChildren: () =>
      import('./forecast/forecast.module').then((m) => m.ForecastModule),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./comment/comment.module').then((m) => m.CommentModule),
  },
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
