import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router:Router)
  {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(sessionStorage.getItem('userName')!='Admin' && sessionStorage.getItem('userName')!=null)
      return true;
    this.router.navigate(['/student']);
      return false;
  }
  
}
