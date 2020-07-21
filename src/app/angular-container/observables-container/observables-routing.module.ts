import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ObservablesContainerComponent } from './observables-container.component';
import { OperateursFiltresComponent } from './operateurs-filtres/operateurs-filtres.component';
import { OperateursAutresComponent } from './operateurs-autres/operateurs-autres.component';
import { OperateursCombinaisonComponent } from './operateurs-combinaison/operateurs-combinaison.component';
import { CreationFonctionFluxComponent } from './creation-fonction-flux/creation-fonction-flux.component';
import { OperateursPipeablesComponent } from './operateurs-pipeables/operateurs-pipeables.component';
import { OperateursCreationComponent } from './operateurs-creation/operateurs-creation.component';
import { OperateursPipesRxjsComponent } from './operateurs-pipes-rxjs/operateurs-pipes-rxjs.component';
import { UtilisationSubjectsComponent } from './utilisation-subjects/utilisation-subjects.component';
import { IntroductionSubjectsComponent } from './introduction-subjects/introduction-subjects.component';
import { CreationObservableComponent } from './creation-observable/creation-observable.component';
import { ObservablesIntroductionComponent } from './observables-introduction/observables-introduction.component';


const routes: Route[] = [
  {
    path: "",
    component: ObservablesContainerComponent,
    children: [
        { path: "Introduction", component: ObservablesIntroductionComponent },
        {
          path: "Creation-observable",
          component: CreationObservableComponent,
        },
        {
          path: "Introduction-subjects",
          component: IntroductionSubjectsComponent,
        },
        {
          path: "Utilisation-subjects",
          component: UtilisationSubjectsComponent,
        },
        { path: "Operateurs-pipes", component: OperateursPipesRxjsComponent },
        {
          path: "Operateurs-creation",
          component: OperateursCreationComponent,
        },
        {
          path: "Operateurs-pipeables",
          component: OperateursPipeablesComponent,
        },
        {
          path: "Creation-fonction-generation-flux",
          component: CreationFonctionFluxComponent,
        },
        {
          path: "Operateurs-combinaison",
          component: OperateursCombinaisonComponent,
        },
        { path: "Operateurs-filtre", component: OperateursFiltresComponent },
        { path: "Autres", component: OperateursAutresComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
