import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

fdescribe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthGuardService, HttpClient,         { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
