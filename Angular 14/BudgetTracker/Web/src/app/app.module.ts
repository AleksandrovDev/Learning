import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { MonthViewComponent } from './month-view/month-view.component';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from './app-config/app-config.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    AccountComponent,
    AccountListComponent,
    HeaderComponent,
    ContainerComponent,
    MonthViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG, // injection token
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS, // injection token
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
