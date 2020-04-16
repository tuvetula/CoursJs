import { NgModule } from "@angular/core";
import { TitlePageComponent } from '../components/title-page/title-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        TitlePageComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        CommonModule,
        FormsModule,
        TitlePageComponent
    ]
})

export class TitlePageModule{}