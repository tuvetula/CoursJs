import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LessonsMenuComponent } from '../components/lessons-menu/lessons-menu.component'

@NgModule({
    declarations:[
        LessonsMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        LessonsMenuComponent
    ]
})

export class LessonsMenuModule {}