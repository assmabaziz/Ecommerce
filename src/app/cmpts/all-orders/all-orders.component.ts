import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
import { CartService } from '../../core/services/cart.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { IUserOrders } from '../../core/interfaces/user-orders';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink, TranslateModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss',
})
export class AllOrdersComponent implements OnInit {
  private readonly _OrdersService = inject(OrdersService);
  private readonly _CartService = inject(CartService);
  userID: string = '';
  userOrders: IUserOrders[] = [];
  index!: number;
  ngOnInit() {
    this._CartService.getProductCart().subscribe({
      next: (res) => {
        this.userID = res.data.cartOwner;
      },
    });
    this._OrdersService.getUserOrders().subscribe({
      next: (res) => {
        this.userOrders = res.data;
      },
    });
  }
}
