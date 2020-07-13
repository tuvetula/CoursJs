import { Injectable } from "@angular/core";
import { UserFirestoreModel } from "../../models/User/current-user.model";
import { BehaviorSubject } from "rxjs";
import { UserCrudService } from "./user-crud.service";

@Injectable()
export class CurrentUserService {
  public currentUser = new BehaviorSubject<UserFirestoreModel>(null);

  constructor(private userCrudService: UserCrudService) {}

  public configureCurrentUser(user: firebase.User): Promise<any> {
    return new Promise((resolve,reject) => {
      //On verifie si on arrive à recuperer le user en bdd
      this.userCrudService.getOneUser(user.uid).subscribe(
        (userData: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
          if(userData.exists){
            const userDataFirestore:UserFirestoreModel = JSON.parse(JSON.stringify(userData.data()));
            this.currentUser.next({
              uid: user.uid,
              email: user.email,
              name: userDataFirestore.name,
              firstName: userDataFirestore.firstName,
              profilPicture: userDataFirestore.profilPicture ? userDataFirestore.profilPicture : null,
              hasSubscribed: userDataFirestore.hasSubscribed,
              isAdmin: userDataFirestore.isAdmin,
              createdAt: userDataFirestore.createdAt,
              updatedAt: userDataFirestore.updatedAt
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
