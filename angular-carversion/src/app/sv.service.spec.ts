import { TestBed } from '@angular/core/testing';

import { SVService } from './sv.service';

describe('SVService', () => {
  let service: SVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
