import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { SigninService } from '../services/signin.service'

@Injectable({
  providedIn: 'root'
})
export class DatosGuard implements CanActivate {
  constructor (
    private readonly signinSerivce: SigninService,
    private readonly router: Router
  ) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const respuesta = this.signinSerivce.ValidateUserAndPass()
    if (!respuesta) {
      void this.router.navigate(['/signin'])
    }
    return respuesta
  }
}
