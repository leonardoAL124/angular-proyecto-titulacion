import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { apiProtectGuard } from './api-protect.guard';

describe('apiProtectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => apiProtectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
