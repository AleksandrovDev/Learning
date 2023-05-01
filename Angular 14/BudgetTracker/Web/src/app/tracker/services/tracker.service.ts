import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Account, CreateAccountDto } from 'src/app/account/account';
import { AppConfig } from 'src/app/app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

// TODO: account should be stored in service, as only source of truth
@Injectable({
  // it will be removed from the bundle if it doesn't used anywhere
  providedIn: 'root', // means that service registered in provider in app.module
})
export class TrackerService {
  accounts: Account[] = [];

  currentBudget: number = 0;

  headers = new HttpHeaders({
    'token': 'testToken',
  })

  // $ shows that this is a stream
  getAccounts$ = this.http.get<Account[]>('/api/accounts').pipe(
    shareReplay(1) // allows to cache
  );

  constructor(
    private readonly http: HttpClient // @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log('Tracker service initialized');
  }

  // getAccounts() {
    

  //   return this.http.get<Account[]>('/api/accounts', {
  //     headers,
  //   });
  // }

  // fetchAccounts() {
  //   return this.http.get<Account[]>('/api/accounts').subscribe((accounts) => {
  //     this.accounts = accounts;
  //   });
  // }

  getCurrentBudget() {
    // this.recalculateTotalSum();

    return this.currentBudget;

    return new Promise<number>((res) =>
      setTimeout(() => {
        res(this.currentBudget);
      }, 1000)
    );
  }

  addAccount() {
    const account: CreateAccountDto = {
      currency: 'USD',
      currentSum: 3,
      exchangeRate: 1,
      incomes: [
        {
          time: new Date(),
          amount: 100,
        },
      ],
      expenses: [],
      isToggled: false,
    };

    return this.http.post<Account>('/api/accounts', account);
  }

  editAccount() {
    const account: CreateAccountDto = {
      currency: 'USD_UPDATED',
    };

    return this.http.patch<Account>('/api/accounts/0', account);
  }

  delete(id: string) {
    return this.http.delete(`/api/accounts/${id}`);
  }

  recalculateTotalSum(accounts: Account[]) {
    this.currentBudget = accounts.reduce(
      (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
      0
    );
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );

    return this.http.request(request);
  }
}
