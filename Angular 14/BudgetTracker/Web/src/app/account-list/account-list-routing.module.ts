import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: TrackerComponent,
    children: [
      {
        path: 'add',
        component: AccountAddComponent,
      },
      {
        path: ':id',
        component: AccountInfoComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountListRoutingModule {}
