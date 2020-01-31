import { TestBed } from '@angular/core/testing';

import { AuthGuardEService } from './auth-guard-e.service';

describe('AuthGuardEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardEService = TestBed.get(AuthGuardEService);
    expect(service).toBeTruthy();
  });
});
