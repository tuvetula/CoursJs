import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthFormModel } from "../models/authFormValues.model";
import { UserStatueModel } from "../models/userStatue.model";
import { BehaviorSubject } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserCrudService } from "./user-crud.service";

@Injectable()
export class AuthentificationService {
  private userStatue: UserStatueModel = JSON.parse(
    localStorage.getItem("user")
  );
  public userBehaviourSubject: BehaviorSubject<
    UserStatueModel
  > = new BehaviorSubject(this.userStatue);

  private firebaseErrors = {
    'auth/user-not-found': 'Aucun utilisateur ne correspond à cet e-mail',
    'auth/email-already-in-use': "Un compte est déjà existant avec cette adresse mail.",
    'auth/wrong-password': "Le mot de passe n'est pas valide."
  };
  constructor(
    private afAuth: AngularFireAuth,
    private afFirestore : AngularFirestore
  ) {
    //Observable changement statue de connexion du user
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // console.log(user.displayName);
        this.userStatue = {
          isAuthenticated: true,
          uid: user.uid,
          displayName: user.displayName
        };
        this.userBehaviourSubject.next(this.userStatue);
        localStorage.setItem("user", JSON.stringify(this.userStatue));
      } else {
        this.userStatue = {
          isAuthenticated: false,
          uid: null,
          displayName: null
        };
        this.userBehaviourSubject.next(this.userStatue);
        localStorage.removeItem("user");
      }
    });
  }

  public async signUp(email: string , password: string , name: string, firstName: string): Promise<any> {
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await res.user.updateProfile({
        displayName: `${name} ${firstName}`
      });
      return res;
    } catch (error) {
      throw new Error(this.firebaseErrors[error.code]);
    }
  };

  public async signIn(formValues: AuthFormModel): Promise<any> {
    const email = formValues.email;
    const password = formValues.password;
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(this.firebaseErrors[error.code])
    }
  }

  public async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
  }

  public async getCurrentUser(){
    try {
      return await this.afAuth.currentUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}
