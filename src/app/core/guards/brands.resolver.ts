import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BrandsServiseService } from '../services/brands.service';

export const brandsResolver: ResolveFn<boolean> = (route, state) => {
const _BrandsServiseService = inject(BrandsServiseService)
  return _BrandsServiseService.getBrands();
};
