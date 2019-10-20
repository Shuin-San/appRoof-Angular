import { TestBed } from '@angular/core/testing';

import { ApproofServiceService } from './approof-service.service';

describe('ApproofServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApproofServiceService = TestBed.get(ApproofServiceService);
    expect(service).toBeTruthy();
  });
});
