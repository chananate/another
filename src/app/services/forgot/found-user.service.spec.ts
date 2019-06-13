import { TestBed } from '@angular/core/testing';

import { FoundUserService } from './found-user.service';

describe('FoundUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoundUserService = TestBed.get(FoundUserService);
    expect(service).toBeTruthy();
  });
});
