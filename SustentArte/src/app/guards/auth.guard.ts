import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> {
    if(sessionStorage.getItem('rol')=='administador'){
      //console.log('Authoized');
      return true;
    }else{
      //console.log('Unauthorized');
      if(sessionStorage.getItem('rol')=='atesano'){
        this.router.navigate(['panelVendedor']); // Redirigir a la página de login
        return false;
      }
      if(sessionStorage.getItem('rol')=='comprador'){
        this.router.navigate(['productoPrivate']); // Redirigir a la página de login
        return false;
      }
      this.router.navigate(['login']); // Redirigir a la página de login
      return false;
    }
    
  }
  

}


/*import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};*/
