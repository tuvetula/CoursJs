import { NgModule } from "@angular/core";
import { ModifyAvatarFormComponent } from '../components/modify-avatar-form/modify-avatar-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadProfilPictureService } from '../services/User/upload-profil-picture.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [ModifyAvatarFormComponent],
    imports: [CommonModule , ReactiveFormsModule , FlexLayoutModule],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        ModifyAvatarFormComponent
    ],
    providers:[UploadProfilPictureService]
})

export class ModifyAvatarFormModule{}