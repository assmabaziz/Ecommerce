import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GetProductsService } from '../../core/services/get-products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist.service';
@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsProductComponent implements OnInit, OnDestroy {
  detailsProduct: IProduct = {} as IProduct;
  specificProductSub!: Subscription;
  private readonly _GetProductsService = inject(GetProductsService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CartService = inject(CartService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _ToastrService = inject(ToastrService);
  ngOnInit(): void {
    this.specificProductSub = this._ActivatedRoute.data.subscribe({
      next: (res) => {
        this.detailsProduct = res['guardDetails']['data'];
      },
    });
  }
  ngOnDestroy(): void {
    this.specificProductSub.unsubscribe();
  }
  addProductToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message);
        this._CartService.CartItems.set(res.numOfCartItems);
      },
    });
  }
  addWishProduct(id: string): void {
    this._WishlistService.addProductToWishList(id).subscribe({
      next: (res) => {
        this._WishlistService.wishItems.set(res.data.length);
        this._ToastrService.success(res.message);
      },
    });
  }
}
