import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly _HttpClient: HttpClient = inject(HttpClient);
  getCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`);
  }
  getSpecificCategory(catID: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${catID}`);
  }
  getSubCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/subcategories`);
  }
}
