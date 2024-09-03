import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsBrandResolver } from './details-brand.resolver';

describe('detailsBrandResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsBrandResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
