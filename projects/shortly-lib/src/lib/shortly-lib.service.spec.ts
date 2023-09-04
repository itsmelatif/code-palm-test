import { TestBed } from '@angular/core/testing';

import { ShortlyLibService } from './shortly-lib.service';

describe('ShortlyLibService', () => {
  let service: ShortlyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
