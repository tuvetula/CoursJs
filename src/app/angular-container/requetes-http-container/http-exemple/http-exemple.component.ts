import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpUserService } from "src/app/shared/services/Menus/Angular/http-user.service";
import { HttpUserModel } from "src/app/shared/models/Angular/http-requete-user.model";
import { HttpErrorResponse } from "@angular/common/http";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { Subscription, Observable, empty } from "rxjs";
import { catchError, map, finalize, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-http-exemple",
  templateUrl: "./http-exemple.component.html",
  styleUrls: ["./http-exemple.component.css"],
  providers: [HttpUserService],
})
export class HttpExempleComponent implements OnInit, OnDestroy {
  private currentUserSubscription: Subscription;

  public name: string = "";
  public age: number;
  public error: string;

  public users$: Observable<HttpUserModel[]>;

  constructor(
    private currentUserService: CurrentUserService,
    private httpUserService: HttpUserService
  ) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUser.subscribe(
      (currentUser) => {
        if (currentUser) {
          this.getUsers();
        }
      }
    );
  }

  public getUsers(): void {
    this.users$ = this.httpUserService.getUsers().pipe(
      catchError((error) => {
        this.handleError(error);
        return empty();
      })
    );
  }

  public addUser() {
    this.users$ = this.users$.pipe(
      map((usersResult: HttpUserModel[]) => {
        let newUsersArray: HttpUserModel[] = [];
        //On reconstruit le tableau (au cas ou des données ont été effacées directement en bdd)
        if (usersResult) {
          usersResult.forEach((user) => {
            if (user) {
              newUsersArray.push(user);
            }
          });
        }
        //On ajoute le new user
        //On calcule son id en ajoutant 1 à l'id du dernier utilisateur dans le tableau
        if (this.age && this.name.length > 0) {
          newUsersArray.push({
            id:
              newUsersArray.length > 0
                ? newUsersArray[newUsersArray.length - 1].id + 1
                : 0,
            name: this.name,
            age: this.age,
          });
          return newUsersArray;
        } else if (this.name.length > 0) {
          newUsersArray.push({
            id:
              newUsersArray.length > 0
                ? newUsersArray[newUsersArray.length - 1].id + 1
                : 0,
            name: this.name,
          });
          return newUsersArray;
        } else {
          throw new Error("Formulaire non valide");
        }
      }),
      mergeMap((usersSecondMap: HttpUserModel[]) => {
        return this.httpUserService.addUser(usersSecondMap);
      }),
      finalize(() => {
        this.name = "";
        this.age = undefined;
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err instanceof ErrorEvent) {
      // Dans ce cas il s’agit d’une erreur client
      // messageErreur = err.error.message;
      this.error = err.error.message;
    } else {
      // Dans ce cas le serveur a retourné une erreur comme réponse HTTP :
      this.error = "Erreur serveur: " + err.status + " " + err.statusText;
    }
  }
  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
