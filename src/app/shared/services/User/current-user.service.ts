import { Injectable } from "@angular/core";
import { CurrentUserModel } from "../../models/User/current-user.model";
import { BehaviorSubject } from "rxjs";
import { UserCrudService } from "./user-crud.service";

@Injectable()
export class CurrentUserService {
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
