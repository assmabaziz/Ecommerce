import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _HttpClient: HttpClient) {}
  checkout(id: string | any, formDetails: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${environment.urlServer}`,
      {
        shippingAddress: formDetails,
      }
    );
  }
  getUserOrders(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/`);
  }
}
