import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ServicesContainerComponent } from './services-container.component';
import { ServicesUtilisationComponent } from './services-utilisation/services-utilisation.component';
import { ServicesHierarchieComponent } from './services-hierarchie/services-hierarchie.component';
import { ServicesInjectionDefinitionComponent } from './services-injection-definition/services-injection-definition.component';
import { ServicesDefinitionComponent } from './services-definition/services-definition.component';

const routes: Route[] = [
  {
    path: "",
    component: ServicesContainerComponent,
    children: [
        {
            path: "Definition-service",
            component: ServicesDefinitionComponent,
          },
          {
            path: "Definition-injection-dependances",
            component: ServicesInjectionDefinitionComponent,
          },
          {
            path: "Hierarchie",
            component: ServicesHierarchieComponent,
          },
          { path: "Utilisation", component: ServicesUtilisationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
