import { NgModule } from "@angular/core";
import { MyAccountContainerComponent } from './my-account-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountProfilComponent } from './my-account-profil/my-account-profil.component';
import { MyAccountParametresComponent } from './my-account-parametres/my-account-parametres.component';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipeModule } from '../shared/modules/date-pipe.module';
import { ModifyAvatarFormModule } from '../shared/modules/modifyAvatar.module'
import { ProfilPictureModule } from '../shared/modules/profilPicture.module';

@NgModule({
    declarations:[
        MyAccountContainerComponent, 
        MyAccountProfilComponent, 
        MyAccountParametresComponent
    ],
    imports: [CommonModule,
        FormsModule,
        RouterModule,
        FlexLayoutModule,
        LessonsMenuModule,
        TitlePageModule,
        DatePipeModule,
        ModifyAvatarFormModule,
        ProfilPictureModule,
        MyAccountRoutingModule],
    providers:[]
})

export class MyAccountModule {}