import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);
  if(auth.estaAutenticado()){
    console.log('Esta autenticado:',auth.estaAutenticado);
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;
  }
};
