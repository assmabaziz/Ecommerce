import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { wishListResolver } from './wish-list.resolver';

describe('wishListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => wishListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
