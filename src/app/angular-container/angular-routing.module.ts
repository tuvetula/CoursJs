import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
//Guards
import { AuthGuard } from "../shared/guard/auth.guard";
import { SubscribeGuard } from "../shared/guard/subscribe.guard";
//AngularContainer Modules
import { MaterialCoursModule } from "./material-container/material.module";
import { ComposantModule } from './composant-container/composant.module';
import { DirectiveModule } from './directive-container/directive.module';
import { ObservablesModule } from './observables-container/observables.module';
import { MeanModule } from './mean-container/mean.module';
import { AuthentificationJwtModule } from './authentification-jwt-container/authentification-jwt.module';
import { ServicesModule } from './services-container/services.module';
import { RoutingModule } from './routing-container/routing.module';
import { FormulairesModule } from './formulaires-container/formulaires.module';
import { TestsModule } from './tests-container/tests.module';
import { AnimationsModule } from './animations-container/animations.module';
import { RequetesHttpModule } from './requetes-http-container/requetes-http.module';
import { ModulesModule } from './modules-container/modules.module';
import { PipesModule } from './pipes-container/pipes.module';
import { FlexLayoutCoursModule } from './flex-layout-container/flex-layout.module';
//Component
import { AngularContainerComponent } from "./angular-container.component";
const routes: Route[] = [
  {
    path: "Angular",
    component: AngularContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [SubscribeGuard],
    children: [
      {
        path: "Composants",
        loadChildren: () => ComposantModule
      },
      {
        path: "Directives",
        loadChildren: () => DirectiveModule
      },
      {
        path: "Observables",
        loadChildren: () => ObservablesModule
      },
      {
        path: "Mean",
        loadChildren: () => MeanModule
      },
      {
        path: "Material",
        loadChildren: () => MaterialCoursModule  
      },
      {
        path: "AuthentificationJwt",
        loadChildren: () => AuthentificationJwtModule
      },
      {
        path: "Services",
        loadChildren: () => ServicesModule
      },
      {
        path: "Routing",
        loadChildren: () => RoutingModule
      },
      {
        path: "Formulaires",
        loadChildren: () => FormulairesModule
      },
      {
        path: "Pipes",
        loadChildren: () => PipesModule
      },
      {
        path: "RequetesHttp",
        loadChildren: () => RequetesHttpModule
      },
      {
        path: "Modules",
        loadChildren: () => ModulesModule
      },
      {
        path: "Animations",
        loadChildren: () => AnimationsModule
      },
      {
        path: "Tests",
        loadChildren: () => TestsModule
      },
      {
        path: "FlexLayout",
        loadChildren: () => FlexLayoutCoursModule
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
