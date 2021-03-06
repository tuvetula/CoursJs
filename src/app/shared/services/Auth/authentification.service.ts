import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthFormModel } from "../../models/Forms/authFormValues.model";
import { UserStatueModel } from "../../models/User/userStatue.model";
import { BehaviorSubject, Observable } from "rxjs";
import { CurrentUserService } from "../User/current-user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserCrudService } from "../User/user-crud.service";

@Injectable()
export class AuthentificationService {
  public userStatue: BehaviorSubject<UserStatueModel> = new BehaviorSubject(
    JSON.parse(localStorage.getItem("user"))
  );

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
    private currentUserService: CurrentUserService,
    private userCrudService: UserCrudService,
    private router: Router
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
                console.log("authstate user: error catch");
                this.logout();
                this.setUserStatue();
              });
          } else {
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

  public deleteAccount(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.getCurrentUser().then(
        (user: firebase.User) => {
          this.userCrudService
            .deleteOneUser(user.uid)
            .then(() => {
              user
                .delete()
                .then(() => {
                  resolve();
                })
                .catch((error) => reject(error));
            })
            .catch((error) => reject(error));
        },
        (error) => reject(error)
      );
    });
    }

  public sendPasswordResetEmail(passwordResetEmail: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  public async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.router.navigate(["/"]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
  }

  public getCurrentUser(): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(
        (user) => {
          resolve(user);
        },
        (error) => reject(error)
      );
    });
  }

  public getIdToken(): Observable<string> {
    return this.afAuth.idToken;
  }

  private setUserStatue(user?: firebase.User) {
    let userStatue: UserStatueModel;
    if (user) {
      userStatue = {
        isAuthenticated: true,
        displayName: user.displayName,
      };
      this.userStatue.next(userStatue);
      localStorage.setItem("user", JSON.stringify(userStatue));
    } else {
      userStatue = null;
      this.userStatue.next(userStatue);
      localStorage.removeItem("user");
    }
  }
}
