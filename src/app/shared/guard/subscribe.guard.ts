import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../services/User/current-user.service';
import { AuthentificationService } from '../services/Auth/authentification.service';
import { UserCrudService } from '../services/User/user-crud.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscribeGuard implements CanActivateChild {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private userCrudService: UserCrudService
  ){}
  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authentificationService.isLoggedIn()){
      this.router.navigate(['/']);
      return false;
    } else {
      let user = this.currentUserService.currentUser.value;
      if((user && !user.hasSubscribed)){
        this.router.navigate(['/Access-denied']);
        return false;
      } else if (!user){
        return this.verifyIfhasSubscribed()
      } else {
        return true;
      }
    }
  }

  private verifyIfhasSubscribed(){
    return new Promise<boolean>((resolve)=>{
      this.authentificationService.getCurrentUser()
      .then(
        user => this.userCrudService.getOneUser(user.uid).pipe(
          take(1)
        ).subscribe(
          (
            currentUser: firebase.firestore.DocumentSnapshot<
              firebase.firestore.DocumentData
            >
          ) => {
            if (!currentUser.data().hasSubscribed) {
              this.router.navigate(["/Access-denied"]);
              resolve(false);
            } else {
              resolve(true);
            }
          })
        )
        .catch((error) => {
          resolve(false)})
    })
  }
  
}
