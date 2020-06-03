import { NgModule } from "@angular/core";
import { AdminContainerComponent } from './admin-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        AdminContainerComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
    ]
})

export class AdminModule{}