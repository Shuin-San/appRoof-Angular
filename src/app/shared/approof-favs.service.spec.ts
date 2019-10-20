import { TestBed } from '@angular/core/testing';

import { ApproofFavsService } from './approof-favs.service';

describe('ApproofFavsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApproofFavsService = TestBed.get(ApproofFavsService);
    expect(service).toBeTruthy();
  });
});
