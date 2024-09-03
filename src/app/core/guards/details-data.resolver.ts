import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetProductsService } from '../services/get-products.service';

export const detailsDataResolver: ResolveFn<boolean> = (route, state) => {
  const _GetProductsService = inject(GetProductsService);
  return _GetProductsService.getSpecifyProduct(route.paramMap.get('id'));
};
