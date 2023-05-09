import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
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
import { HeaderComponent } from '../../header/header.component';
import { TrackerService } from './services/tracker.service';
import { APP_SERVICE_CONFIG } from '../../app-config/app-config.service';
import { AppConfig } from '../../app-config/app-config.interface';
import {
  Observable,
  Subject,
  Subscription,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'budget-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.less'],
})
export class TrackerComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    // AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  income = '20$';
  role = 'Admin';
  message = '';
  hideIncome = true;
  // accounts: Account[] = [];
  title = 'Current assets:';
  currentBudget = 0;
  currentBudget$ = new Subject();

  // Subject is a base class for all type of streams you can get
  error$: Subject<string> = new Subject<string>();

  getError$ = this.error$.asObservable();

  accounts$ = this.trackerService.getAccounts$.pipe(
    // this.currentBudget$.next()
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    }),
    map((accounts) => {
      this.trackerService.recalculateTotalSum(accounts);
      this.currentBudget$.next(this.trackerService.getCurrentBudget());
      return accounts;
    })
  );

  accountSumFilter = new FormControl<number>({
    value: 0,
    disabled: false,
  });

  // currentBudget$ = this.trackerService.getAccounts$.pipe(
  //   map((accounts) => {
  //     this.trackerService.recalculateTotalSum(accounts);
  //     return this.trackerService.getCurrentBudget();
  //   })
  // )

  stream = new Observable<string>((observer) => {
    observer.next('User 1');
    observer.next('User 2');
    observer.next('User 3');
    observer.complete();
  });

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

  totalBytes = 0;

  subscriptionObject!: Subscription;

  constructor(
    @SkipSelf() private readonly trackerService: TrackerService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig, // Inject value
    private readonly configService: ConfigService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {} // use only for inject services, other logic place in ngOnInit

  async ngOnInit(): Promise<void> {
    // use to fetch data from the API

    // console.log(this.config.apiUrl);
    // this.accounts = this.trackerService.getAccounts();

    this.trackerService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Reqeust has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log('Request completed!');
        }
      }
    });

    // this.subscriptionObject = this.trackerService.getAccounts$.subscribe(
    //   async (accounts) => {
    //     this.accounts = accounts;
    //     this.trackerService.recalculateTotalSum(accounts);
    //     this.currentBudget = await this.trackerService.getCurrentBudget();
    //   }
    // );

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
  }

  ngDoCheck(): void {
    // Listen to any changes in entire application
    // console.log('do check triggered');
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Assigned title';

    this.headerChildrenComponent.last.title = 'Last title';
    // this.headerChildrenComponent.first.title = 'Firest';
  }

  // called when one full cycle completed
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
  
  // Don't use ngDoCheck and onChanges in the same component

  ngOnDestroy(): void {
    // console.log('Destoy tracker called');
    // if (this.subscriptionObject) { // don't forget to destroy subscriptions
    //   this.subscriptionObject.unsubscribe();
    // }
  }

  showUpdateMessage(account: Account) {
    this.message = `Account ${account.currency} has been updated!`;
    setTimeout(() => (this.message = ''), 2000);
  }

  // addAccount() {
  //   this.trackerService.addAccount().subscribe(async (account) => {
  // this.trackerService.recalculateTotalSum(this.accounts$)
  // this.currentBudget$.next('100000')
  // this.accounts$.next()
  // this.accounts = [...this.accounts, account];
  // this.trackerService.recalculateTotalSum(this.accounts);
  //     this.currentBudget = await this.trackerService.getCurrentBudget();
  //   });
  // }

  editAccount() {
    this.trackerService.editAccount().subscribe((updatedAccount) => {
      // this.trackerService.getAccounts().subscribe((accounts) => {
      //   this.accounts = accounts;
      // });
    });
  }

  deleteAccount() {
    this.trackerService.delete('0').subscribe(() => {
      // this.trackerService.getAccounts().subscribe((accounts) => {
      //   this.accounts = accounts;
      // });
    });
  }
}

/* Three ways to bid data from component to view:
  Iterpolation
  Property binding
  Event binding
*/
