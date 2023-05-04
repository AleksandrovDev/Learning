import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListRoutingModule } from './account-list-routing.module';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account-list.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { FormsModule } from '@angular/forms';
import { TrackerComponent } from './tracker/tracker.component';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';

@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent,
    AccountInfoComponent,
    AccountAddComponent,
    TrackerComponent,
  ],
  imports: [CommonModule, AccountListRoutingModule, FormsModule, HeaderModule],
  exports: [
    // do not forget to export components which you want to access outside of your module
    AccountListComponent,
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {
        title: 'Account',
      },
    },
  ],
})
export class AccountListModule {}
