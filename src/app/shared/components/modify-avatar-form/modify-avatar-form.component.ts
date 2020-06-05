import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadProfilPictureService } from '../../services/User/upload-profil-picture.service';
import { CompressService } from '../../services/Images/compress.service';

@Component({
  selector: 'app-modify-avatar-form',
  templateUrl: './modify-avatar-form.component.html',
  styleUrls: ['./modify-avatar-form.component.css'],
  providers: [CompressService]
})
export class ModifyAvatarFormComponent implements OnInit {
  public modifyAvatarForm: FormGroup;
  public modifyAvatarError: string;
  public showModifyAvatarForm: boolean;

  public selectedFile: File;
  public localCompressedUrl: string;
  public percentage: number;
  public showProgressBar: boolean;

  constructor(
    private fb: FormBuilder,
    private uploadProfilPictureService: UploadProfilPictureService,
    private compressService: CompressService
  ) { }

  ngOnInit(): void {
    this.modifyAvatarForm = this.fb.group({
      file: [null , Validators.required]
    });
    this.showModifyAvatarForm = true;
  }

  public selectFile(event: { target: { files: FileList } }){
    if(this.percentage !== 0){
      this.percentage = 0;
    }
    const output = document.getElementById('output');
    if(event.target.files && event.target.files.item(0)){
      this.selectedFile = event.target.files.item(0);
      const reader = new FileReader();
      reader.onload = (event) => {
        const localUrl = event.target.result;
        this.compressService.compressFile(localUrl)
        .then((imageCompressedUrl) => {
          this.localCompressedUrl = imageCompressedUrl;
          output.setAttribute("src", this.localCompressedUrl);
        })
        .catch(error => console.error(error));
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  public modify(){
    if(this.localCompressedUrl){
      const file = this.compressService.createFileFromImageUrl(this.localCompressedUrl , this.generateUniqId());
      this.showProgressBar = true;
      this.uploadProfilPictureService.addAvatarToStorage(file).subscribe(
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
          },2000);
        }
      );
    }
  }
  public isPercentage100(): boolean{
    return this.percentage === 100;
  }

  public modifyAvatarFormReset(): void {
    const output = document.getElementById('output');
    if(output){
      output.removeAttribute('src');
    }
    this.selectedFile = null;
    this.showProgressBar = false;
    this.percentage = 0;
    this.modifyAvatarForm.reset();
  }

  private generateUniqId(): string {
    const date = new Date();
    const elements = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2),
      "-",
      ("0" + date.getHours()).slice(-2),
      ("0" + date.getMinutes()).slice(-2),
      ("0" + date.getSeconds()).slice(-2),
      "-",
      date.getUTCMilliseconds() * Math.floor((Math.random()*100)*(Math.random()*10))
    ];
    return elements.join("");
  }
}
