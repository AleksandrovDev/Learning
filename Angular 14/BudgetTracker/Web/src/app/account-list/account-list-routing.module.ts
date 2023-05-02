import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: 'accounts/add',
    component: AccountAddComponent,
  },
  {
    path: 'accounts/:id',
    component: AccountInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountListRoutingModule {}
