import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './month-view/month-view.component';
import { TrackerComponent } from './account-list/tracker/tracker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountInfoComponent } from './account-list/account-info/account-info.component';
import { AccountAddComponent } from './account-list/account-add/account-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'month-view',
    component: MonthViewComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
