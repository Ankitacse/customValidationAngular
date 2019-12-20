import { TestBed, async, inject } from '@angular/core/testing';

import { LoginSessionGuard } from './login-session.guard';

describe('LoginSessionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSessionGuard]
    });
  });

  it('should ...', inject([LoginSessionGuard], (guard: LoginSessionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
