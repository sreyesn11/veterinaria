
import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';

// export const perfilAdministradorGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })

export class PerfilAdministradorGuard implements CanActivate {

  constructor(private serviceCore: CoreService,
    private router: Router,) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      console.log("usuario autenticado", this.serviceCore.getUsuarioAutenticado())
      if (this.serviceCore.getUsuarioAutenticado() == null) {
        console.log("false")
        this.router.navigate(['/login'])
        obs.next(false)
        //return false
      }
      else {
        console.log("true")
        obs.next(true)
        //return true
      }
    });

  }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  //   return new Promise<boolean>((resolve, reject) => {
  //     if (this.serviceCore.getUsuarioAutenticado() == null) {
  //       console.log("false")
  //       this.router.navigate(['/login'])
  //       return false
  //     }
  //     else {
  //       console.log("true")
  //       return true
  //     }
  //   });
  // }

}