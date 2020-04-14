import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CodeFormatDirective } from '../directives/code-format.directive';
import { TextColorGreenDirective } from '../directives/text-color-green.directive';

@NgModule({
    declarations:[
        CodeFormatDirective,
        TextColorGreenDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        CodeFormatDirective,
        TextColorGreenDirective
    ]
})
export class CodeFormatModule{}