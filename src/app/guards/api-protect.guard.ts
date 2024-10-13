import { CanActivateFn } from '@angular/router';

export const apiProtectGuard: CanActivateFn = (route, state) => {
  let login = sessionStorage.getItem('login');

  if (login == 'true') {
    return true;
  } else {
    return false;
  }
};
