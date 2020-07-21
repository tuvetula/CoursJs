import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LessonsMenuModule } from "../shared/modules/lessons-menu.module";
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { ModulesModule } from "./modules-container/modules.module";
import { FormulairesModule } from "./formulaires-container/formulaires.module";
import { PipesModule } from "./pipes-container/pipes.module";
import { RequetesHttpModule } from "./requetes-http-container/requetes-http.module";
import { RoutingModule } from "./routing-container/routing.module";
import { TestsModule } from "./tests-container/tests.module";
import { FlexLayoutCoursModule } from './flex-layout-container/flex-layout.module';
import { AnimationsModule } from "./animations-container/animations.module";
import { AngularRoutingModule } from './angular-routing.module';

import { AngularContainerComponent } from "./angular-container.component";

@NgModule({
  declarations: [AngularContainerComponent],
  imports: [
    CommonModule,
    TitlePageModule,
    LessonsMenuModule,
    AngularRoutingModule
  ],
  providers: []
})
export class AngularModule {}
