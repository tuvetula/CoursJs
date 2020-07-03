import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { UserFirestoreModel } from '../../models/User/current-user.model';

@Injectable()
export class UserCrudService {
  constructor(
    private afFirestore: AngularFirestore,
  ) {}

  public async createUser(
    credentials: { user: { uid: string } },
    name: string,
    firstName: string
  ): Promise<any> {
    const user:UserFirestoreModel = {
      name: name,
      firstName: firstName,
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

  public getOneUser(uid: string):Observable<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    return this.afFirestore
      .collection("users")
      .doc(uid)
      .get();
  }
}
