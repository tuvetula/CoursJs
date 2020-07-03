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
      //On verifie si on arrive à recuperer le user en bdd
      this.userCrudService.getOneUser(user.uid).subscribe(
        (userData: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
          if(userData.exists){
            const userDataFirestore = JSON.parse(JSON.stringify(userData.data()));
            this.currentUser.next({
              uid: user.uid,
              email: user.email,
              user: userDataFirestore,
            });          
            resolve();
          }
        },
        (error) => {
          this.currentUser.next(null);
          reject(error.message);
        }
      );
    })
    
  }
}
