import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SousMenuComponent } from 'src/app/shared/components/NavBarList/sous-menu/sous-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SousMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SousMenuComponent
    ]
})

export class SousMenuModule{}