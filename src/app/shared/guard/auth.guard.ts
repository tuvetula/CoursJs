import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthentificationService } from "../services/Auth/authentification.service";
import { CurrentUserService } from "../services/User/current-user.service";
import { UserCrudService } from "../services/User/user-crud.service";
import { take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private userCrudService: UserCrudService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authentificationService.isLoggedIn()) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authentificationService.isLoggedIn()) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
}
