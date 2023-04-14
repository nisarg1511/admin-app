import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.afAuth.authState.pipe(
      map((user: any) => {
        if (user) {
          this.authService.userName.next(user);
          return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
      })
    );
  }
}
