import { TestBed } from '@angular/core/testing';

import { ForecastGuard } from './forecast.guard';

describe('ForecastGuard', () => {
  let guard: ForecastGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForecastGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
