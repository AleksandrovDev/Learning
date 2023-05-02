import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListRoutingModule } from './account-list-routing.module';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account-list.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
    AccountInfoComponent,
    AccountAddComponent,
  ],
  imports: [CommonModule, AccountListRoutingModule, FormsModule],
  exports: [
    // do not forget to export components which you want to access outside of your module
    AccountListComponent,
  ],
})
export class AccountListModule {}
