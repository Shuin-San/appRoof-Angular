import { TestBed } from '@angular/core/testing';

import { PagesServiceService } from './pages-service.service';

describe('PagesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesServiceService = TestBed.get(PagesServiceService);
    expect(service).toBeTruthy();
  });
});
