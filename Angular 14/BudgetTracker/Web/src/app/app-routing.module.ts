import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './month-view/month-view.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';

const routes: Routes = [
  {
    path: 'month-view',
    component: MonthViewComponent,
  },
  {
    path: 'tracker',
    component: TrackerComponent,
  },
  {
    path: 'accounts/:id', component: AccountInfoComponent,
  },
  {
    path: '',
    redirectTo: 'tracker',
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
