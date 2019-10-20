import { TestBed } from '@angular/core/testing';

import { FetchTrainingsService } from './fetch-trainings.service';

describe('FetchTrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTrainingsService = TestBed.get(FetchTrainingsService);
    expect(service).toBeTruthy();
  });
});
