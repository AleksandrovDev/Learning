import { Injectable } from '@angular/core';
import { Account } from 'src/app/account/account';

@Injectable({
  // it will be removed from the bundle if it doesn't used anywhere
  providedIn: 'root', // means that service registered in provider in app.module
})
export class TrackerService {
  accounts: Account[] = [
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

  currentBudget: number = 0;

  constructor() {
    console.log('Tracker service initialized');
  }

  getAccounts() {
    return this.accounts;
  }

  async getCurrentBudget() {
    this.recalculateTotalSum();

    return new Promise<number>((res) =>
      setTimeout(() => {
        res(this.currentBudget);
      }, 1000)
    );
  }

  addAccount() {
    const account: Account = {
      currency: 'USD',
      currentSum: 3,
      exchangeRate: 1,
      incomes: [],
      expenses: [],
      isToggled: false,
    };

    this.accounts = [...this.accounts, account];

    this.recalculateTotalSum();
  }

  recalculateTotalSum() {
    this.currentBudget = this.accounts.reduce(
      (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
      0
    );
  }
}
