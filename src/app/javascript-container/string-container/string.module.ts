import { NgModule } from "@angular/core";
import { StringContainerComponent } from './string-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { StringIntroductionComponent } from './string-introduction/string-introduction.component';
import { StringLitterauxModeleComponent } from './string-litteraux-modele/string-litteraux-modele.component';
import { StringProprieteIndexLengthComponent } from './string-propriete-index-length/string-propriete-index-length.component';
import { StringMethodesDisponiblesComponent } from './string-methodes-disponibles/string-methodes-disponibles.component';
import { StringExpressionsRationnellesComponent } from './string-expressions-rationnelles/string-expressions-rationnelles.component';


@NgModule({
    declarations: [
        StringContainerComponent,
        StringIntroductionComponent,
        StringLitterauxModeleComponent,
        StringProprieteIndexLengthComponent,
        StringMethodesDisponiblesComponent,
        StringExpressionsRationnellesComponent
    ],
    imports: [CommonModule,RouterModule,FormsModule,CodeFormatModule]
})
export class StringModule{}