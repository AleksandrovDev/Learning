import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Account } from '../account/account';
import { HeaderComponent } from '../header/header.component';
import { TrackerService } from './services/tracker.service';
import { APP_SERVICE_CONFIG } from '../app-config/app-config.service';
import { AppConfig } from '../app-config/app-config.interface';

@Component({
  selector: 'budget-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.less'],
})
export class TrackerComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  income = '20$';
  role = 'Admin';
  message = '';
  hideIncome = false;
  accounts: Account[] = [];
  title = 'Current assets:';
  currentBudget = 0;

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

  constructor(
    @SkipSelf() private readonly trackerService: TrackerService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig // Inject value
  ) {} // use only for inject services, other logic place in ngOnInit

  async ngOnInit(): Promise<void> {
    // use to fetch data from the API
    console.log(this.config.apiUrl);
    this.trackerService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
    this.currentBudget = await this.trackerService.getCurrentBudget();
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

  ngOnDestroy(): void {
    console.log('Destoy tracker called');
  }

  showUpdateMessage(account: Account) {
    this.message = `Account ${account.currency} has been updated!`;
    setTimeout(() => (this.message = ''), 2000);
  }

  addAccount() {
    this.trackerService.addAccount();
    this.trackerService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
}

/* Three ways to bid data from component to view:
  Iterpolation
  Property binding
  Event binding
*/
