import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthGuardComprador implements CanActivate{
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> {
    if(sessionStorage.getItem('rol')=='comprador'){
      //console.log('Authoized');
      return true;
    }else{
      //console.log('Unauthorized');
      if(sessionStorage.getItem('rol')=='atesano'){
        this.router.navigate(['panelVendedor']); // Redirigir a la página de login
        return false;
      }
      if(sessionStorage.getItem('rol')=='administador'){
        this.router.navigate(['panelAdmin']); // Redirigir a la página de login
        return false;
      }
      this.router.navigate(['login']); // Redirigir a la página de login
      return false;
    }
  }
}