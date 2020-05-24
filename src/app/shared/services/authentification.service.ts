import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthFormModel } from "../models/authFormValues.model";
import { UserStatueModel } from "../models/userStatue.model";
import { BehaviorSubject } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class AuthentificationService {
  private userStatue: UserStatueModel = JSON.parse(
    localStorage.getItem("user")
  );
  public userBehaviourSubject: BehaviorSubject<
    UserStatueModel
  > = new BehaviorSubject(this.userStatue);

  constructor(
    private afAuth: AngularFireAuth,
    private afFirestore: AngularFirestore
  ) {
    //Observable changement statue de connexion du user
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userStatue = {
          isAuthenticated: true,
        };
        this.userBehaviourSubject.next(this.userStatue);
        localStorage.setItem("user", JSON.stringify(this.userStatue));
      } else {
        this.userStatue = {
          isAuthenticated: false,
        };
        this.userBehaviourSubject.next(this.userStatue);
        localStorage.removeItem("user");
      }
    });
  }

  public signUp(formValues): Promise<any> {
    const name = formValues.completeName.name;
    const firstName = formValues.completeName.firstName;
    const email = formValues.email;
    const password = formValues.password;
    name
    const data = {
      name: this.capitalizeFirstLetter(name),
      firstName: this.capitalizeFirstLetter(firstName),
      email: email,
      isAdmin: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    return this.afFirestore.collection('users').add(data)
    .then(
      () => {
        this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            this.logout();
          }
        );
      }
    )
  }

  public signIn(formValues: AuthFormModel): Promise<any> {
    const email = formValues.email;
    const password = formValues.password;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.afAuth.signOut().catch((err) => console.log(err));
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
  }

  private capitalizeFirstLetter(data: string): string {
    if (typeof data !== 'string') return ''
    return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
  }
}
