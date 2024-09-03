import { TestBed } from '@angular/core/testing';

import { BrandsServiseService } from './brands-servise.service';

describe('BrandsServiseService', () => {
  let service: BrandsServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
