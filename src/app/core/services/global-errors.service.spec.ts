import { TestBed } from '@angular/core/testing';

import { GlobalErrorsService } from './global-errors.service';

describe('GlobalErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalErrorsService = TestBed.get(GlobalErrorsService);
    expect(service).toBeTruthy();
  });
});
