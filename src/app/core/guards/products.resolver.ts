import { ResolveFn } from '@angular/router';
import { GetProductsService } from '../services/get-products.service';
import { inject } from '@angular/core';

export const productsResolver: ResolveFn<boolean> = (route, state) => {
const _GetProductsService = inject(GetProductsService)

  return _GetProductsService.getAllProducts();
};
