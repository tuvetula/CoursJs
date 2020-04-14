import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ListMenuLeftModule } from "../shared/modules/listMenuLeft.module";
import { SousMenuModule } from "../shared/modules/sousMenu.module";

import { ComposantModule } from "./composant-container/composant.module";
import { DirectiveModule } from "./directive-container/directive.module";
import { ModulesModule } from "./modules-container/modules.module";
import { ObservablesModule } from "./observables-container/observables.module";
import { FormulairesModule } from "./formulaires-container/formulaires.module";
import { PipesModule } from "./pipes-container/pipes.module";
import { RequetesHttpModule } from "./requetes-http-container/requetes-http.module";
import { RoutingModule } from "./routing-container/routing.module";
import { ServicesModule } from "./services-container/services.module";
import { TestsModule } from "./tests-container/tests.module";
import { AnimationsModule } from "./animations-container/animations.module";
import { AngularRoutingModule } from './angular-routing.module';

import { AngularContainerComponent } from "./angular-container.component";

@NgModule({
  declarations: [AngularContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ListMenuLeftModule,
    SousMenuModule,
    AnimationsModule,
    ComposantModule,
    DirectiveModule,
    FormulairesModule,
    ModulesModule,
    ObservablesModule,
    PipesModule,
    RequetesHttpModule,
    RoutingModule,
    ServicesModule,
    TestsModule,
    AngularRoutingModule
  ],
  providers: []
})
export class AngularModule {}
