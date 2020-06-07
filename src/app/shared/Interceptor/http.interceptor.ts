import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AuthentificationService } from '../services/Auth/authentification.service';
import { mergeMap, take, retry } from 'rxjs/operators';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  private idToken: string;

  constructor(
    private authenticationService: AuthentificationService
  ){}
 
  intercept( req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.getIdToken().pipe(
      retry(2),
      take(1),
      mergeMap(
        (token: string) => {
          this.idToken = token;
          const reqClone = req.clone({
            //headers: req.headers.append("auth", "azerty"),
            params: new HttpParams().set('auth',this.idToken)
          });
          return next.handle(reqClone);
        }
      )
    )
    
  }
}


