import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { HttpUserModel } from "../../../models/Angular/http-requete-user.model";
import { AuthentificationService } from "../../User/authentification.service";
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class HttpUserService {
  private url: string;
  private firebaseUrl: string = "https://coursjs-e9340.firebaseio.com/";
  private urlPathJson = "/users.json";

  constructor(
    private http: HttpClient,
    private authenticationService: AuthentificationService
  ) {
    // this.currentUserService.currentUser.subscribe(
    //   (currentUser: CurrentUserModel) => {
    //     if (currentUser) {
    //       this.url =
    //         "https://coursjs-e9340.firebaseio.com/" +
    //         currentUser.uid +
    //         "/users.json";
    //     }
    //   },
    //   (error) => console.log("Erreur: " + error)
    // );
  }

  public getUsers(): Observable<HttpUserModel[]> {
    try {
      return this.getUrl().pipe(
        mergeMap((url: string) => {
          this.url = url;
          return this.http.get<HttpUserModel[]>(this.url);
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  public addUser(users: HttpUserModel[]): Observable<any> {
    try {
      return this.getUrl().pipe(
        mergeMap((url: string) => {
          this.url = url;
          return this.http.put(this.url, users);
        })
      );
    } catch (error) {
      throw new Error(error);
    }
    
  }

  private getUrl(): Observable<string> {
    return from(
      new Promise<string>((resolve, reject) => {
        this.authenticationService
          .getCurrentUser()
          .then((currentUser: firebase.User) => {
            resolve(this.firebaseUrl + currentUser.uid + this.urlPathJson);
          })
          .catch((error) => reject(error));
      })
    );
  }
}
