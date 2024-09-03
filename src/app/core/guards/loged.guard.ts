import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  if(typeof localStorage !== 'undefined') {
     let _Router = inject(Router)
  if (localStorage.getItem('userToken') !== null) {
    _Router.navigate(['/home'])
    return false;
  } else return true;
  } else {
    return false
  }
};
