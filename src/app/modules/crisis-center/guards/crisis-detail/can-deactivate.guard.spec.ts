import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateCrisisDetailComponentGuard } from './can-deactivate.guard';

describe('CanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateCrisisDetailComponentGuard]
    });
  });

  it('should ...', inject([CanDeactivateCrisisDetailComponentGuard], (guard: CanDeactivateCrisisDetailComponentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
