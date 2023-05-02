import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    AccountComponent,
    AccountListComponent,
    HeaderComponent,
    ContainerComponent,
    MonthViewComponent,
    AppNavComponent,
    NotFoundComponent,
    AccountInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
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
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
