import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private readonly _HttpClient :HttpClient = inject(HttpClient)
 setRegisterForm(data:object):Observable<any> {
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data)
 }
 setEmailVerify(data:object):Observable<any> {
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`, data)
 }
 setCodeVerify(data:object):Observable<any> {
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, data)
 }
 setResetPasword(data:object):Observable<any> {
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`, data)
 }



 //https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords
 //https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords 
}
