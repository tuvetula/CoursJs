import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { FormulairesContainerComponent } from './formulaires-container.component';
import { FormulairesExempleComponent } from './formulaires-exemple/formulaires-exemple.component';
import { FormgroupEventemitterComponent } from './formgroup-eventemitter/formgroup-eventemitter.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormgroupsImbriquesComponent } from './formgroups-imbriques/formgroups-imbriques.component';
import { ClassesEtatsAbstractcontrolComponent } from './classes-etats-abstractcontrol/classes-etats-abstractcontrol.component';
import { MessageErreurComponent } from './message-erreur/message-erreur.component';
import { ValidateursComponent } from './validateurs/validateurs.component';
import { ValueEtResetComponent } from './value-et-reset/value-et-reset.component';
import { ApiFormcontrolFormgroupComponent } from './api-formcontrol-formgroup/api-formcontrol-formgroup.component';
import { CreationFormulaireReactifComponent } from './creation-formulaire-reactif/creation-formulaire-reactif.component';
import { IntroductionReactiveformComponent } from './introduction-reactiveform/introduction-reactiveform.component';


const routes: Route[] = [
  {
    path: "",
    component: FormulairesContainerComponent,
    children: [
        {
            path: "Introduction-ReactiveForm",
            component: IntroductionReactiveformComponent,
          },
          {
            path: "Creation-formulaire-reactif",
            component: CreationFormulaireReactifComponent,
          },
          {
            path: "Api-formControl-formGroup",
            component: ApiFormcontrolFormgroupComponent,
          },
          { path: "Value-Reset", component: ValueEtResetComponent },
          { path: "Validateurs", component: ValidateursComponent },
          { path: "Messages-erreur", component: MessageErreurComponent },
          {
            path: "Classes-etats-abstractControls",
            component: ClassesEtatsAbstractcontrolComponent,
          },
          {
            path: "FormGroups-imbriques",
            component: FormgroupsImbriquesComponent,
          },
          { path: "FormArray", component: FormarrayComponent },
          { path: "FormBuilder", component: FormbuilderComponent },
          {
            path: "FormGroup-eventEmitter",
            component: FormgroupEventemitterComponent,
          },
          { path: "Exemple", component: FormulairesExempleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulairesRoutingModule {}
