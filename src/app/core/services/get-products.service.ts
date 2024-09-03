import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
private readonly _HttpClient = inject(HttpClient)
getAllProducts():Observable<any> {
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
}
getSpecifyProduct(id:string | null):Observable<any> {
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
}
}
