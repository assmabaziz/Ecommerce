import { CurrencyPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GetProductsService } from '../../core/services/get-products.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly _GetProductsService = inject(GetProductsService);
  private readonly _CartService = inject(CartService);
  private readonly _WishlistService = inject(WishlistService)
  private readonly _ToastrService = inject(ToastrService)


  productsList: IProduct[] = [];
  productSub!: Subscription;
  ngOnInit(): void {
    this.productSub = this._GetProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.productsList = res.data;
      }
    });
  }
  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }
  addProductToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message);
        this._CartService.CartItems.set(res.numOfCartItems);
        console.log(this._CartService.CartItems());
      },
    });
  }
  addWishProduct(id: string): void {
    this._WishlistService.addProductToWishList(id).subscribe({
      next: (res) => {
        this._WishlistService.wishItems.set(res.data.length)
        this._ToastrService.success(res.message);
      },
    });
  }
}
