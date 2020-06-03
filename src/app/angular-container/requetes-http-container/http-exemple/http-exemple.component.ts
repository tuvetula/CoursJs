import { Component, OnInit } from "@angular/core";
import { HttpUserService } from "src/app/shared/services/Menus/Angular/http-user.service";
import { HttpUserModel } from "src/app/shared/models/Angular/http-requete-user.model";
import { HttpErrorResponse } from "@angular/common/http";
import { retry } from "rxjs/operators";

@Component({
  selector: "app-http-exemple",
  templateUrl: "./http-exemple.component.html",
  styleUrls: ["./http-exemple.component.css"],
  providers: [HttpUserService],
})
export class HttpExempleComponent implements OnInit {
  public name: string = "";
  public age: number;
  public users: HttpUserModel[];
  public error: string;

  constructor(private httpUserService: HttpUserService,) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.httpUserService
    .getUsers()
    .pipe(retry(2))
    .subscribe(
      (users: HttpUserModel[]) => (this.users = users),
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  public addUser() {
    if (this.age && this.name.length > 0) {
      this.users.push({
        id: this.users.length,
        name: this.name,
        age: this.age,
      });
    } else if (this.name.length > 0) {
      this.users.push({ id: this.users.length, name: this.name });
    }
    this.httpUserService.addUser(this.users).subscribe((response) => {
      this.name = "";
      this.age = undefined;
    });
  }

  private handleError(err: HttpErrorResponse) {
    if (err instanceof ErrorEvent) {
      // Dans ce cas il s’agit d’une erreur client
      // messageErreur = err.error.message;
      this.error = err.error.message;
    } else {
      // Dans ce cas le serveur a retourné une erreur comme réponse HTTP :
      console.log(err);
      this.error = "Erreur serveur: " + err.status + " " + err.statusText;
    }
  }
}
