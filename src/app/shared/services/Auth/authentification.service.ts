import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthFormModel } from "../../models/Forms/authFormValues.model";
import { UserStatueModel } from "../../models/User/userStatue.model";
import { BehaviorSubject, Observable } from "rxjs";
import { CurrentUserService } from "../User/current-user.service";

@Injectable()
export class AuthentificationService {
  public userBehaviourSubject: BehaviorSubject<
    UserStatueModel
  > = new BehaviorSubject(JSON.parse(localStorage.getItem("user")));

  private firebaseErrors = {
    "auth/user-not-found": "Aucun utilisateur ne correspond à cet e-mail",
    "auth/email-already-in-use":
      "Un compte est déjà existant avec cette adresse mail.",
    "auth/wrong-password": "Le mot de passe n'est pas valide.",
    "auth/network-request-failed":
      "Une erreur de réseau (telle qu'un dépassement de délai, une connexion interrompue ou un hôte injoignable) s'est produite.",
  };

  constructor(
    private afAuth: AngularFireAuth,
    private currentUserService: CurrentUserService
  ) {
    this.afAuth.setPersistence("session").then(() => {
      //Observable changement statue de connexion du user
      this.afAuth.authState.subscribe(
        (user: firebase.User) => {
          if (user) {
            this.currentUserService
              .configureCurrentUser(user)
              .then(() => this.setUserStatue(user))
              .catch((error) => {
                this.logout();
                this.setUserStatue();
              });
          } else {
            console.error("authenticationService authState: no user");
            this.setUserStatue();
            this.currentUserService.currentUser.next(null);
          }
        },
        (error) => {
          console.error("Failed failed");
          this.setUserStatue();
        }
      );
    });
  }

  public async signUp(
    email: string,
    password: string,
    name: string,
    firstName: string
  ): Promise<firebase.auth.UserCredential> {
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await res.user.updateProfile({
        displayName: `${name} ${firstName}`,
      });
      return res;
    } catch (error) {
      throw new Error(this.firebaseErrors[error.code]);
    }
  }

  public async signIn(
    formValues: AuthFormModel
  ): Promise<firebase.auth.UserCredential> {
    const email = formValues.email;
    const password = formValues.password;
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(this.firebaseErrors[error.code]);
    }
  }

  public async logout(): Promise<void> {
    try {
      return await this.afAuth.signOut();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
  }

  public getCurrentUser(): Promise<firebase.User> {
    return this.afAuth.currentUser;
  }

  public getIdToken(): Observable<string> {
    return this.afAuth.idToken;
  }

  private setUserStatue(user?: firebase.User) {
    let userStatue: UserStatueModel;
    if (user) {
      userStatue = {
        isAuthenticated: true,
        uid: user.uid,
        displayName: user.displayName,
      };
      this.userBehaviourSubject.next(userStatue);
      localStorage.setItem("user", JSON.stringify(userStatue));
    } else {
      userStatue = {
        isAuthenticated: false,
        uid: null,
        displayName: null,
      };
      this.userBehaviourSubject.next(userStatue);
      localStorage.removeItem("user");
    }
  }
}
