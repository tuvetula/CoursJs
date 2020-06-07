import { Injectable } from "@angular/core";
import { CurrentUserModel } from "../../models/User/current-user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { UserCrudService } from "./user-crud.service";

@Injectable()
export class CurrentUserService {
  public currentUser = new BehaviorSubject<CurrentUserModel>(null);

  constructor(private userCrudService: UserCrudService) {}

  public configureCurrentUser(user: firebase.User): Promise<any> {
    return new Promise((resolve,reject) => {
      this.userCrudService.getOneUser(user).subscribe(
        (userData: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
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
