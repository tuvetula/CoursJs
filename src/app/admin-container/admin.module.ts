import { NgModule } from "@angular/core";
import { AdminContainerComponent } from './admin-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { ToggleButtonModule } from '../shared/modules/toggle-button.module';

@NgModule({
    declarations:[
        AdminContainerComponent,
        AdminUsersComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        TitlePageModule,
        LessonsMenuModule,
        ToggleButtonModule,
        AdminRoutingModule,
    ]
})

export class AdminModule{}