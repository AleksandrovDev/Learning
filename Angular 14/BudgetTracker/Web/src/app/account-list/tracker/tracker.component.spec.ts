import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerComponent } from './tracker.component';
import { TrackerService } from './services/tracker.service';
import { ConfigService } from 'src/app/services/config.service';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from 'src/app/app-config/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteConfigToken } from 'src/app/services/routeConfig.service';
import { HeaderComponent } from 'src/app/header/header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('TrackerComponent', () => {
  let component: TrackerComponent;
  let fixture: ComponentFixture<TrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackerComponent, HeaderComponent],
      imports: [HttpClientModule, RouterModule, ReactiveFormsModule],
      providers: [
        TrackerService,
        ConfigService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {data: {} }}
        },
        {
          provide: RouteConfigToken,
          useValue: {
            title: 'accounts'
          }
        },
        {
          provide: APP_SERVICE_CONFIG,
          useValue: { apiEndpoint: '' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
