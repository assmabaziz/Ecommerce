import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

export const detailsCatResolver: ResolveFn<boolean> = (route, state) => {
  const _CategoriesService = inject(CategoriesService)
  return _CategoriesService.getSpecificCategory(route.paramMap.get('catId')) ;
};
