import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allOrdersResolver } from './all-orders.resolver';

describe('allOrdersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allOrdersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
