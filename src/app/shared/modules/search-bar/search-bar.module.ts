import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilPictureModule } from '../profilPicture.module';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ProfilPictureModule,
  ],
  exports:[
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SearchBarComponent,
    ProfilPictureModule
  ]
})
export class SearchBarModule { }
