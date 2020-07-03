import { NgModule } from "@angular/core";
import { AdminContainerComponent } from './admin-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';

@NgModule({
    declarations:[
        AdminContainerComponent,
        AdminUsersComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        FlexLayoutModule,
        TitlePageModule,
        LessonsMenuModule,
        AdminRoutingModule,
    ]
})

export class AdminModule{}