import { TestBed } from '@angular/core/testing';

import { TodayDateService } from './today-date.service';

describe('TodayDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodayDateService = TestBed.get(TodayDateService);
    expect(service).toBeTruthy();
  });
});
