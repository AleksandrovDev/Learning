import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TrackerComponent } from './account-list/tracker/tracker.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './local-storage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'budget-root',
  templateUrl: './app.component.html',
  template: `<h1>Budget Tracker</h1>
    <p>Ang</p>`,
  styleUrls: ['./app.component.less'],
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'BudgetTracker';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Inject(localStorageToken) private readonly localStorage: Storage,
    private readonly initService: InitService,
    private readonly configService: ConfigService,
    private readonly router: Router,
    @Optional() private readonly loggerService?: LoggerService
  ) {
    console.log(this.initService.config);
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log('Navigation Started');
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Navigation completed');
      });

    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Budget tracker';

    this.localStorage.setItem('name', 'Budget tracker');
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(TrackerComponent); // dynamic template loading
    // componentRef.instance.role = 'User';
  }
}
