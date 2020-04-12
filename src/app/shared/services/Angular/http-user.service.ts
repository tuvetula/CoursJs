import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpUserModel } from "../../../shared/models/Angular/http-requete-user.model";

@Injectable()
export class HttpUserService {
  private url: string = "https://coursjs-e9340.firebaseio.com/users.json";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<HttpUserModel[]> {
    return this.http.get<HttpUserModel[]>(this.url);
  }
  public addUser(users: HttpUserModel[]) {
    return this.http.put(this.url, users);
  }
}
