import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { CurrentUserService } from "./current-user.service";
import { finalize } from "rxjs/operators";
import { UserFirestoreProfilPictureModel } from '../../models/User/current-user.model';


@Injectable()
export class UploadProfilPictureService {
  private basePath = "/profilPictures";

  constructor(
    private afStorage: AngularFireStorage,
    private afFirestore: AngularFirestore,
    private currentUserService: CurrentUserService,
  ) {}
  
  public addAvatarToStorage(file: File) {
    //Si le user possede deja une photo de profil, on supprime l'ancienne
    this.afStorage.storage.ref(this.currentUserService.currentUser.value.user.profilPicture.storagePath).delete();

    const filePath = `${this.basePath}/${file.name}`;
    const storageRef = this.afStorage.ref(filePath);
    const uploadTask = this.afStorage.upload(filePath, file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL: string) => {
            const profilPicture: UserFirestoreProfilPictureModel = {
              url: downloadURL,
              storagePath: filePath
            }
            this.saveProfilPictureUrlInFirestore(profilPicture);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }
  private saveProfilPictureUrlInFirestore(profilPicture: UserFirestoreProfilPictureModel) {
    const uid = this.currentUserService.currentUser.value.uid;
    this.afFirestore
      .collection("users")
      .doc(uid)
      .update({ profilPicture: profilPicture })
      .then(() => this.modifyCurrentUser(profilPicture))
  }

  private modifyCurrentUser(profilPicture: UserFirestoreProfilPictureModel): void {
    this.currentUserService.currentUser.value.user.profilPicture = profilPicture;
    this.currentUserService.currentUser.next(this.currentUserService.currentUser.value);
  }
}
