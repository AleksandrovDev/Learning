import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AccountGuard } from './guards/account.guard';

const routes: Routes = [
  {
    // don't forget to clear path if you make this module lazy
    path: '',
    component: TrackerComponent,
    canActivateChild: [AccountGuard],
    children: [
      {
        path: 'add',
        component: AccountAddComponent,
      },
      // {
      //   path: ':id',
      //   component: AccountInfoComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountListRoutingModule {}
