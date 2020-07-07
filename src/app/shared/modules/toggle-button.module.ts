import { NgModule } from "@angular/core";
import { ToggleButtonComponent } from '../components/toggle-button/toggle-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ToggleButtonComponent],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports: [
        ToggleButtonComponent,
        CommonModule,
        FormsModule
    ]
})
export class ToggleButtonModule{}