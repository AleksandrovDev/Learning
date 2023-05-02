import { Component } from '@angular/core';
import { CreateAccountDto } from '../account';
import { TrackerService } from 'src/app/tracker/services/tracker.service';

@Component({
  selector: 'budget-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.less'],
})
export class AccountAddComponent {
  account: CreateAccountDto = {
    currency: '',
    exchangeRate: 1,
    incomes: [],
    expenses: [],
    isToggled: false,
    currentSum: 0,
    id: '',
  }; // this is will be default values for our form

  successMessage = '';

  constructor(private readonly trackerService: TrackerService) {}

  addAccount() {
    this.trackerService.addAccount(this.account).subscribe((createdAccount) => {
      console.log(createdAccount);
      this.successMessage = createdAccount.id + ' created';
    });
  }
}
