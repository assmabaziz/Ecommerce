import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { GetProductsService } from '../../core/services/get-products.service';
import { ICategory, IProduct } from '../../core/interfaces/iproduct';
import { CategoriesService } from '../../core/services/categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, OnDestroy {
  getProductsSub!: Subscription;
  getCategoriesSub!: Subscription;
  getSpecificCategorYSub!: Subscription;
  productList: IProduct[] = [];
  categoryList: ICategory[] = [];
  detailsCat: ICategory = {} as ICategory;
  private readonly _GetProductsService = inject(GetProductsService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  ngOnInit(): void {
    this.getProductsSub = this._GetProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
      },
    });
    this.getCategoriesSub = this._CategoriesService.getCategories().subscribe({
      next: (res) => {
        this.categoryList = res.data;
      },
    });
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        let idCategory: string | null = p.get('catId');
        this.getSpecificCategorYSub = this._CategoriesService
          .getSpecificCategory(idCategory)
          .subscribe({
            next: (res) => {
              this.detailsCat = res.data;
            },
          });
      },
    });
  }
  ngOnDestroy(): void {
    // this.getProductsSub?.unsubscribe();
    this.getCategoriesSub?.unsubscribe();
    this.getSpecificCategorYSub?.unsubscribe();
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
        this._WishlistService.wishItems.set(res.data.length)
        this._ToastrService.success(res.message);
      },
    });
  }
}
