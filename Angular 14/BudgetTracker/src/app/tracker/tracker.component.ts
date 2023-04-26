import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account';

@Component({
  selector: 'budget-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.less'],
})
export class TrackerComponent implements OnInit {
  income = '20$';
  role = 'Admin';
  
  message = ''

  hideIncome = false;

  accounts: Account[] = [];

  currentBudget = this.accounts.reduce(
    (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
    0,
  );

  toggle() {
    this.hideIncome = !this.hideIncome;
  }

  constructor() {} // use only fo inject services

  ngOnInit(): void {
    // use to fetch data from the API
    this.accounts = [
      {
        currency: 'RUB',
        currentSum: 100000,
        exchangeRate: 0.012,
        isToggled: false,
        incomes: [
          {
            time: new Date(),
            amount: 100,
          },
        ],
        expenses: [
          {
            time: new Date(),
            amount: -200,
          },
        ],
      },
      {
        currency: 'EUR',
        exchangeRate: 1.1,
        currentSum: 20000,
        isToggled: false,
        incomes: [
          {
            time: new Date(),
            amount: 100,
          },
        ],
        expenses: [],
      },
    ];

    setTimeout(() => {
      this.currentBudget = this.accounts.reduce(
        (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
        0,
      );
    }, 1000);
  }
  
  showUpdateMessage(account: Account) {
    this.recalculateTotalSum();
    this.message = `Account ${account.currency} has been updated!`
    setTimeout(() => this.message = '', 2000)
  }
  
  recalculateTotalSum() {
    this.currentBudget = this.accounts.reduce(
      (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
      0,
    );
  }
}

/* Three ways to bid data from component to view:
  Iterpolation
  Property binding
  Event binding
*/
