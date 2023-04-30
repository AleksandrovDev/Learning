import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Account } from 'src/app/account/account';
import { AppConfig } from 'src/app/app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

@Injectable({
  // it will be removed from the bundle if it doesn't used anywhere
  providedIn: 'root', // means that service registered in provider in app.module
})
export class TrackerService {
  accounts: Account[] = [];

  currentBudget: number = 0;

  constructor(
    private readonly http: HttpClient,
    // @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log('Tracker service initialized');
  }

  getAccounts() {
    return this.http.get<Account[]>('/api/accounts');
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
