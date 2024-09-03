import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsCatResolver } from './details-cat.resolver';

describe('detailsCatResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsCatResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
