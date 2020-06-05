import { NgModule } from "@angular/core";
import { ProfilPictureComponent } from '../components/profil-picture/profil-picture.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProfilPictureComponent],
    imports: [CommonModule],
    exports: [ CommonModule , ProfilPictureComponent]
})

export class ProfilPictureModule{}