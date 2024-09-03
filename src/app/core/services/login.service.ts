import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  useData: any = null;
  private readonly _HttpClient: HttpClient = inject(HttpClient);
  readonly _Router = inject(Router);
  setLoginForm(data: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/signin`,
      data
    );
  }
  saveUserData(): void {
    if (localStorage.getItem('userToken') !== null)
      this.useData = jwtDecode(localStorage.getItem('userToken')!);
    // console.log('user data', this.useData);
  }
  logOut(): void {
    localStorage.removeItem('userToken');
    this.useData = null;
    this._Router.navigate(['/login']);
  }
}
