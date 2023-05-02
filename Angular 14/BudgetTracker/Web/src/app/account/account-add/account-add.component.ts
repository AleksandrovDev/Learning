import { Component } from '@angular/core';
import { CreateAccountDto } from '../account';
import { TrackerService } from 'src/app/tracker/services/tracker.service';
import { NgForm } from '@angular/forms';

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

  addAccount(accountForm: NgForm) {
    this.trackerService.addAccount(this.account).subscribe((createdAccount) => {
      this.successMessage = createdAccount.id + ' created';
      accountForm.reset();

      accountForm.resetForm({ // set defalut values after form reset
        currency: '',
        exchangeRate: 1,
        incomes: [],
        expenses: [],
        isToggled: false,
        currentSum: 0,
        id: '',
      });
    });
  }
}
