import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

fdescribe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [AuthGuardService]}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
