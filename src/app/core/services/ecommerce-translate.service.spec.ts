import { TestBed } from '@angular/core/testing';

import { EcommerceTranslateService } from './ecommerce-translate.service';

describe('EcommerceTranslateService', () => {
  let service: EcommerceTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
