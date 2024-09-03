import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { Subscription } from 'rxjs';
import { IData } from '../../core/interfaces/icart';
import { IWishProductsList } from '../../core/interfaces/iwish';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent implements OnInit, OnDestroy {
  private readonly _WishlistService = inject(WishlistService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  wishSub!: Subscription;
  result: IData = {} as IData;
  wishList: IWishProductsList[] = [];
  ngOnInit(): void {
    this.wishSub = this._WishlistService.getContentWishList().subscribe({
      next: (res) => {
        this.result = res;
        this.wishList = res.data;
      }
    });
  }
  ngOnDestroy(): void {
    this.wishSub.unsubscribe();
  }
  addProductToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        this._CartService.CartItems.set(res.numOfCartItems);
        this._ToastrService.success(res.message);
      }
    });
  }
  removerWishProduct(id: string, index:number): void {
    this._WishlistService.removeProductFromWishlist(id).subscribe({
      next: (res) => {
        this._WishlistService.wishItems.set(res.data.length)
        this._ToastrService.warning(
          'Product removed successfully from your wishlist'
        );
      }
    });
    this.wishList.splice(index, 1);
  }

}
