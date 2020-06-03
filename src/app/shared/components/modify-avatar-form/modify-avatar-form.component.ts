import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from '../../models/FileUpload/file-upload.model';
import { UploadProfilPictureService } from '../../services/User/upload-profil-picture.service';

@Component({
  selector: 'app-modify-avatar-form',
  templateUrl: './modify-avatar-form.component.html',
  styleUrls: ['./modify-avatar-form.component.css']
})
export class ModifyAvatarFormComponent implements OnInit {
  public modifyAvatarForm: FormGroup;
  public modifyAvatarError: string;
  public showModifyAvatarForm: boolean;

  public selectedFile: FileList;
  public currentFileUpload: FileUpload;
  public percentage: number;

  private previewObjectUrl;

  constructor(
    private fb: FormBuilder,
    private uploadProfilPictureService: UploadProfilPictureService
  ) { }

  ngOnInit(): void {
    this.modifyAvatarForm = this.fb.group({
      file: [null , Validators.required]
    });
    this.showModifyAvatarForm = true;
  }

  public selectFile(event: { target: { files: FileList; }; }){
    //Si un fichier etait déja selectionné avant ce changement
    if(this.selectedFile && this.previewObjectUrl){      
      window.URL.revokeObjectURL(this.previewObjectUrl);
      this.selectedFile = null;
    }
    this.selectedFile = event.target.files;
    const output = document.getElementById('output');
    this.previewObjectUrl = window.URL.createObjectURL(this.selectedFile[0])
    output.setAttribute("src", this.previewObjectUrl);
  }
  public modify(){
    const file = this.selectedFile.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadProfilPictureService.addAvatarToStorage(this.currentFileUpload).subscribe(
      (percentage: number) => {
        this.percentage = Math.round(percentage);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.showModifyAvatarForm = false;
        setTimeout(()=>{
          const buttonCloseModal = document.getElementById("closeModifyAvatarForm");
          if(buttonCloseModal){
            buttonCloseModal.click();
          }
          this.modifyAvatarError = null;
          this.showModifyAvatarForm = true;
          this.modifyAvatarFormReset();
        },3000);
      }
    );
  }

  public modifyAvatarFormReset(): void {
    const output = document.getElementById('output');
    output.removeAttribute('src');
    window.URL.revokeObjectURL(this.previewObjectUrl);
    this.selectedFile = null;
    this.modifyAvatarForm.reset();
  }
}
