import { TestBed } from '@angular/core/testing';

import { AuthGuordServiceService } from './auth-guord-service.service';

describe('AuthGuordServiceService', () => {
  let service: AuthGuordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
