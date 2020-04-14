import { NgModule } from "@angular/core";
import { ObservablesContainerComponent } from './observables-container.component';
import { ObservablesIntroductionComponent } from './observables-introduction/observables-introduction.component';
import { CreationObservableComponent } from './creation-observable/creation-observable.component';
import { IntroductionSubjectsComponent } from './introduction-subjects/introduction-subjects.component';
import { UtilisationSubjectsComponent } from './utilisation-subjects/utilisation-subjects.component';
import { OperateursPipesRxjsComponent } from './operateurs-pipes-rxjs/operateurs-pipes-rxjs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
    declarations:[
        ObservablesContainerComponent,
        ObservablesIntroductionComponent,
        CreationObservableComponent,
        IntroductionSubjectsComponent,
        UtilisationSubjectsComponent,
        OperateursPipesRxjsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        CodeFormatModule
    ],
    providers: []
})

export class ObservablesModule{}