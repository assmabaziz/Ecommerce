import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { FlowbitService } from '../../core/services/flowbit.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { TranslateModule } from '@ngx-translate/core';
import { EcommerceTranslateService } from '../../core/services/ecommerce-translate.service';
@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit {
  readonly _LoginService = inject(LoginService);
  private readonly _CartService = inject(CartService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _EcommerceTranslateService = inject(
    EcommerceTranslateService
  );
  cartTotalItems:Signal<number> = computed(()=> this._CartService.CartItems())
  wishTotalItems:Signal<number> = computed(()=> this._WishlistService.wishItems())
  constructor(private _FlowbitService: FlowbitService) {}
  ngOnInit(): void {
    this._FlowbitService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    this._CartService.getProductCart().subscribe({
      next: (res) => {
        this._CartService.CartItems.set(res.numOfCartItems)
      },
    });

    this._WishlistService.getContentWishList().subscribe({
      next: (res) => {
        this._WishlistService.wishItems.set(res.data.length)
      },
    });
  }
  change(lang: string): void {
    this._EcommerceTranslateService.changeLang(lang);
  }
}
