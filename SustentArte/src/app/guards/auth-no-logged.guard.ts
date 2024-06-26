import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthGuardNoLogged implements CanActivate{
  rol?:String;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> {
    
      if(sessionStorage.getItem('rol')=='atesano'){
        this.router.navigate(['panelVendedor']); // Redirigir a la página de login
        return false;
      }
      if(sessionStorage.getItem('rol')=='administador'){
        this.router.navigate(['panelAdmin']); // Redirigir a la página de login
        return false;
      }
      if(sessionStorage.getItem('rol')=='comprador'){
        this.router.navigate(['productoPrivate']); // Redirigir a la página de login
        return false;
      }else{
        return true;
      }
  }
}