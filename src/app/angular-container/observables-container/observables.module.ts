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
import { OperateursCreationComponent } from './operateurs-creation/operateurs-creation.component';
import { OperateursPipeablesComponent } from './operateurs-pipeables/operateurs-pipeables.component';
import { CreationFonctionFluxComponent } from './creation-fonction-flux/creation-fonction-flux.component';
import { OperateursCombinaisonComponent } from './operateurs-combinaison/operateurs-combinaison.component';
import { OperateursFiltresComponent } from './operateurs-filtres/operateurs-filtres.component';

@NgModule({
    declarations:[
        ObservablesContainerComponent,
        ObservablesIntroductionComponent,
        CreationObservableComponent,
        IntroductionSubjectsComponent,
        UtilisationSubjectsComponent,
        OperateursPipesRxjsComponent,
        OperateursCreationComponent,
        OperateursPipeablesComponent,
        CreationFonctionFluxComponent,
        OperateursCombinaisonComponent,
        OperateursFiltresComponent
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