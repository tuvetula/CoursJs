import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiFormcontrolFormgroupComponent } from './api-formcontrol-formgroup/api-formcontrol-formgroup.component';
import { ClassesEtatsAbstractcontrolComponent } from './classes-etats-abstractcontrol/classes-etats-abstractcontrol.component';
import { FormulairesContainerComponent } from './formulaires-container.component';
import { IntroductionReactiveformComponent } from './introduction-reactiveform/introduction-reactiveform.component';
import { CreationFormulaireReactifComponent } from './creation-formulaire-reactif/creation-formulaire-reactif.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormgroupsImbriquesComponent } from './formgroups-imbriques/formgroups-imbriques.component';
import { FormgroupEventemitterComponent } from './formgroup-eventemitter/formgroup-eventemitter.component';
import { FormulairesExempleComponent } from './formulaires-exemple/formulaires-exemple.component';
import { ValueEtResetComponent } from './value-et-reset/value-et-reset.component';
import { ValidateursComponent } from './validateurs/validateurs.component';
import { MessageErreurComponent } from './message-erreur/message-erreur.component';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
    declarations:[
        ApiFormcontrolFormgroupComponent,
        ClassesEtatsAbstractcontrolComponent,
        FormulairesContainerComponent,
        IntroductionReactiveformComponent,
        CreationFormulaireReactifComponent,
        FormarrayComponent,
        FormbuilderComponent,
        FormgroupsImbriquesComponent,
        FormgroupEventemitterComponent,
        FormulairesExempleComponent,
        ValueEtResetComponent,
        ValidateursComponent,
        MessageErreurComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CodeFormatModule
    ],
    providers:[]
})

export class FormulairesModule { }