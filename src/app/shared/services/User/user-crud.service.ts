import { Injectable } from "@angular/core";
import {
  AngularFirestore,
} from "@angular/fire/firestore";
import { Observable, of, from } from "rxjs";
import { UserFirestoreModel } from "../../models/User/current-user.model";
import { map, switchMap } from "rxjs/operators";

@Injectable()
export class UserCrudService {
  constructor(private afFirestore: AngularFirestore) {}

  public async createUser(
    credentials:firebase.auth.UserCredential,
    name: string,
    firstName: string
  ): Promise<any> {
    const user: UserFirestoreModel = {
      uid: credentials.user.uid,
      name: name,
      firstName: firstName,
      email: credentials.user.email,
      hasSubscribed: false,
      isAdmin: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    try {
      await this.afFirestore
        .collection("users")
        .doc(credentials.user.uid)
        .set(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public getOneUser(
    uid: string
  ): Observable<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  > {
    return this.afFirestore.collection("users").doc(uid).get();
  }

  public getUsers(): Observable<UserFirestoreModel[]> {
    return this.afFirestore
      .collection("users")
      .get()
      .pipe(
        map((result) => result.docs),
        map((datas) => datas.map((data) => data.data())),
        map((datas: UserFirestoreModel[]) =>
          datas.sort((a, b) => {
            if (b.name < a.name) {
              return 1;
            } else if (b.name > a.name) {
              return -1;
            } else {
              if (b.firstName < a.firstName) {
                return 1;
              } else if (b.firstName > a.firstName) {
                return -1;
              }
            }
          })
        )
      );
  }

  public getNumberOfSubscribe(): Observable<number>{
    return this.afFirestore.collection("users").valueChanges().pipe(
      switchMap((data:UserFirestoreModel[]) => {
        return of(data.filter(data => data.hasSubscribed).length)
      })
    )
  }
  public async modifyUserDocument(
    field: string,
    value: boolean,
    uid: string
  ): Promise<void> {
    try {
      await this.afFirestore
        .collection("users")
        .doc(uid)
        .update({ [field]: value });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteOneUser(uid: string): Promise<void>{
    try {
      await this.afFirestore.collection('users').doc(uid).delete();
    } catch (error) {
      throw new Error(error)
    }
  }
}
