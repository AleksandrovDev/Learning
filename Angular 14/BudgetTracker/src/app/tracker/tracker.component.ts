import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Account } from '../account/account';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'budget-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.less'],
})
export class TrackerComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  income = '20$';
  role = 'Admin';

  message = '';

  hideIncome = false;

  accounts: Account[] = [];

  title = 'Current assets:';

  // headerComponent

  currentBudget = this.accounts.reduce(
    (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
    0
  );

  toggle() {
    this.hideIncome = !this.hideIncome;
    this.title = 'Current assets toggled:';
  }

  // this instance will be available only in ngAfterViewInit
  // if static = true, we can refer to in in ngOnInit
  // you can use static=tru if you are sure that it is safe to use this component on ngOnInitStage
  // Means that there is no async operations
  @ViewChild(
    HeaderComponent
    // { static: true }
  )
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {} // use only for inject services, other logic place in ngOnInit

  ngOnInit(): void {
    // console.log(this.headerComponent);

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
        0
      );
    }, 1000);
  }

  ngDoCheck(): void {
    // Listen to any changes in entire application
    console.log('do check triggered');
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Assigned title';

    this.headerChildrenComponent.last.title = 'Last title';
    // this.headerChildrenComponent.first.title = 'Firest';
  }

  // called when one full cycle completed
  ngAfterViewChecked(): void {}

  // Don't use ngDoCheck and onChanges in the same component

  showUpdateMessage(account: Account) {
    this.recalculateTotalSum();
    this.message = `Account ${account.currency} has been updated!`;
    setTimeout(() => (this.message = ''), 2000);
  }

  recalculateTotalSum() {
    this.currentBudget = this.accounts.reduce(
      (sum, acc) => (sum += acc.currentSum * acc.exchangeRate),
      0
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
}

/* Three ways to bid data from component to view:
  Iterpolation
  Property binding
  Event binding
*/
