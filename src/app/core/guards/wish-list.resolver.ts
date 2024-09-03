import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

export const wishListResolver: ResolveFn<boolean> = (route, state) => {
  const _WishlistService = inject(WishlistService)
  return _WishlistService.getContentWishList();
};
