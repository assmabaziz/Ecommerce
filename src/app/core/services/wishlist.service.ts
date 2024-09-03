import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
wishItems:WritableSignal<number> = signal(0)

  constructor(private _HttpClient: HttpClient) {}
  addProductToWishList(id: string): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/wishlist`,
      {
        productId: id,
      }
    );
  }
  getContentWishList(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`);
  }
  removeProductFromWishlist(id: string): Observable<any> {
    return this._HttpClient.delete(
      `${environment.baseUrl}/api/v1/wishlist/${id}`
    );
  }
}
