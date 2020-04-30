import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { JavascriptContainerComponent } from "./javascript-container.component";

import { BasesContainerComponent } from "./bases-container/bases-container.component";
import { VariablesVarComponent } from "./bases-container/variables-var/variables-var.component";
import { VariablesLetConstComponent } from "./bases-container/variables-let-const/variables-let-const.component";
import { HoistingComponent } from "./bases-container/hoisting/hoisting.component";
import { BasesTypesComponent } from "./bases-container/bases-types/bases-types.component";
import { BasesOperateursComponent } from "./bases-container/bases-operateurs/bases-operateurs.component";
import { BasesConversionsComponent } from "./bases-container/bases-conversions/bases-conversions.component";
import { BasesApprofondissementOperateursComponent } from "./bases-container/bases-approfondissement-operateurs/bases-approfondissement-operateurs.component";
import { BasesValeursReferencesComponent } from "./bases-container/bases-valeurs-references/bases-valeurs-references.component";
import { ConditionsEtBouclesContainerComponent } from './conditions-et-boucles-container/conditions-et-boucles-container.component';
import { IfElseElseifComponent } from './conditions-et-boucles-container/if-else-elseif/if-else-elseif.component';
import { TernairesComponent } from './conditions-et-boucles-container/ternaires/ternaires.component';
import { SwitchComponent } from './conditions-et-boucles-container/switch/switch.component';
import { BouclesForComponent } from './conditions-et-boucles-container/boucles-for/boucles-for.component';
import { BouclesWhileComponent } from './conditions-et-boucles-container/boucles-while/boucles-while.component';
import { NombresContainerComponent } from './nombres-container/nombres-container.component';
import { NombresIntroductionComponent } from './nombres-container/nombres-introduction/nombres-introduction.component';
import { NombresDecimauxExposantComponent } from './nombres-container/nombres-decimaux-exposant/nombres-decimaux-exposant.component';
import { NombresMethodesDisponiblesGlobalComponent } from './nombres-container/nombres-methodes-disponibles-global/nombres-methodes-disponibles-global.component';
import { NombresMethodesNumberComponent } from './nombres-container/nombres-methodes-number/nombres-methodes-number.component';
import { NombresObjetMathComponent } from './nombres-container/nombres-objet-math/nombres-objet-math.component';

const routes: Route[] = [
  {
    path: "Javascript",
    component: JavascriptContainerComponent,
    children: [
      {
        path: "Bases",
        component: BasesContainerComponent,
        children: [
          { path: "Variable-var", component: VariablesVarComponent },
          {
            path: "Variables-let-const",
            component: VariablesLetConstComponent,
          },
          { path: "Hoisting", component: HoistingComponent },
          { path: "Types", component: BasesTypesComponent },
          { path: "Operateurs", component: BasesOperateursComponent },
          { path: "Conversions", component: BasesConversionsComponent },
          {
            path: "Approfondissement-operateurs",
            component: BasesApprofondissementOperateursComponent,
          },
          {
            path: "Valeurs-references",
            component: BasesValeursReferencesComponent,
          },
        ],
      },
      {
        path:"Conditions-Boucles", component: ConditionsEtBouclesContainerComponent, children:[
            {path: "If-else-elseif" , component: IfElseElseifComponent},
            {path: "Ternaires" , component: TernairesComponent},
            {path: "Switch" , component: SwitchComponent},
            {path: "Boucle-For" , component: BouclesForComponent},
            {path: "Boucle-While" , component: BouclesWhileComponent},
        ]
      },
      {
        path:"Nombres", component: NombresContainerComponent, children:[
          {path: "Introduction" , component: NombresIntroductionComponent},
          {path: "Decimaux-exposant" , component: NombresDecimauxExposantComponent},
          {path: "Methodes-global" , component: NombresMethodesDisponiblesGlobalComponent},
          {path: "Methodes-number" , component: NombresMethodesNumberComponent},
          {path: "Objet-math" , component: NombresObjetMathComponent},
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
