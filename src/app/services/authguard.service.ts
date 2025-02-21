import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = localStorage.getItem('role');

    if (route.routeConfig?.path?.startsWith('universidad') && userRole?.toLowerCase() !== 'universidad') {
      this.router.navigate(['/']);
      return false;
    }

    if (route.routeConfig?.path?.startsWith('hospital') && userRole?.toLowerCase() !== 'hospital') {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
