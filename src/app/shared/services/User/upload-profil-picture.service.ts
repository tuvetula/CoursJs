import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CurrentUserService } from './current-user.service';
import { FileUpload } from '../../models/FileUpload/file-upload.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadProfilPictureService {
  private basePath = '/uploads';

  constructor(
    private afStorage: AngularFireStorage,
    private afFirestore: AngularFirestore,
    private currentUserService: CurrentUserService
  ) { }
  public addAvatarToStorage(fileUpload: FileUpload) {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.afStorage.ref(filePath);
    const uploadTask = this.afStorage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
   
    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload: FileUpload) {
    const uid = this.currentUserService.currentUser.value.uid;
    //this.db.list(this.basePath).push(fileUpload);
    this.afFirestore.collection('users').doc(uid).update({profilPictureUrl: fileUpload.url});
  }

}
