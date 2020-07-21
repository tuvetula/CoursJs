import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { PipesContainerComponent } from './pipes-container.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';
import { PipesUtilisationComponent } from './pipes-utilisation/pipes-utilisation.component';
import { PipesPersonnaliseCreationComponent } from './pipes-personnalise-creation/pipes-personnalise-creation.component';
import { PipesPursEtImpursComponent } from './pipes-purs-et-impurs/pipes-purs-et-impurs.component';
import { PipesAsynchroneComponent } from './pipes-asynchrone/pipes-asynchrone.component';
import { PipesExempleComponent } from './pipes-exemple/pipes-exemple.component';

const routes: Route[] = [
  {
    path: "",
    component: PipesContainerComponent,
    children: [
        { path: "Introduction", component: PipesIntroductionComponent },
        { path: "Utilisation", component: PipesUtilisationComponent },
        {
          path: "Creer-pipe-personnalise",
          component: PipesPersonnaliseCreationComponent,
        },
        { path: "Pipes-purs-impurs", component: PipesPursEtImpursComponent },
        { path: "Pipe-asynchrone", component: PipesAsynchroneComponent },
        { path: "Exemple", component: PipesExempleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
