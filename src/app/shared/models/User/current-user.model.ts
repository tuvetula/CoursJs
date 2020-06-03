import { DocumentData } from '@angular/fire/firestore/interfaces';
import { UserFirestoreModel } from './user-firestore.model'

export interface CurrentUserModel {
    uid: string,
    email: string,
    user: UserFirestoreModel
}