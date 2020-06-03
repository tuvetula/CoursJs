import { Injectable } from "@angular/core";
import { CurrentUserModel } from "../../models/User/current-user.model";
import { AuthentificationService } from "./authentification.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { UserStatueModel } from "../../models/User/userStatue.model";
import { UserCrudService } from "./user-crud.service";

@Injectable()
export class CurrentUserService {
  private user: UserStatueModel;
  public currentUser = new BehaviorSubject<CurrentUserModel>(null);

  constructor(private userCrudService: UserCrudService) {}

  public configureCurrentUser(user: firebase.User): Promise<any> {
    return new Promise((resolve,reject) => {
      this.userCrudService.getOneUser(user).subscribe(
        (userData) => {
          const userDataFirestore = JSON.parse(JSON.stringify(userData.data()));
          this.currentUser.next({
            uid: user.uid,
            email: user.email,
            user: userDataFirestore,
          });
          resolve();
        },
        (error) => {
          this.currentUser.next(null);
          reject(error.message);
        }
      );
    })
    
  }
}
