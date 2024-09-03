import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ICart, IData, IProduct2 } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  cartProducts: ICart = {} as ICart;
  cartProductsCount: IProduct2 = {} as IProduct2;
  priceproduct!: number;
  result: IData = {} as IData;
  ngOnInit(): void {
    this._CartService.getProductCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartProducts = res.data;
        this.result = res;
      },
    });
  }
  updateQuantityProducts(id: string, count: number): void {
    this._CartService.updateCartQuantity(id, count).subscribe({
      next: (res) => {
        this.cartProducts = res.data;
      },
    });
  }
  removeProduct(id: string): void {
    this._CartService.deleteSpecificProduct(id).subscribe({
      next: (res) => {
        this._ToastrService.warning('product removed');
        this.cartProducts = res.data;
        this.result = res;
        this._CartService.CartItems.set(res.numOfCartItems);
      },
    });
  }
  removeAllProducts() {
    this._CartService.clearCart().subscribe({
      next: (res) => {
        if (res.message == 'success') {
          this.cartProducts = {} as ICart;
          this._CartService.CartItems.set(0);
        }
      },
    });
  }
}
