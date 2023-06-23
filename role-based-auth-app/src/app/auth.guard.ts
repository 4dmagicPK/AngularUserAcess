import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const allowedRoles = route.data['roles'] as Array<string>;
    const userRole = this.authService.getUserRole();

    if (allowedRoles.includes(userRole)) {
      return true;
    } else {
      // Redirect to login page or unauthorized page
      return this.router.parseUrl('/login');
    }
  }
}
