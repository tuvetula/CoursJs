import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AnimationsContainerComponent } from './animations-container.component';
import { AnimationsIntroductionComponent } from './animations-introduction/animations-introduction.component';
import { FonctionsTriggerStateStyleComponent } from './fonctions-trigger-state-style/fonctions-trigger-state-style.component';
import { FonctionsTransitionAnimateComponent } from './fonctions-transition-animate/fonctions-transition-animate.component';
import { KeyframesGroupsComponent } from './keyframes-groups/keyframes-groups.component';
import { CallbacksStartDoneComponent } from './callbacks-start-done/callbacks-start-done.component';
import { AnimationsExempleComponent } from './animations-exemple/animations-exemple.component';


const routes: Route[] = [
  {
    path: "",
    component: AnimationsContainerComponent,
    children: [
        { path: "Introduction", component: AnimationsIntroductionComponent },
          {
            path: "Fonctions-trigger-state-style",
            component: FonctionsTriggerStateStyleComponent,
          },
          {
            path: "Fonctions-transition-animate",
            component: FonctionsTransitionAnimateComponent,
          },
          { path: "Keyframes-groups", component: KeyframesGroupsComponent },
          {
            path: "Callbacks-start-done",
            component: CallbacksStartDoneComponent,
          },
          { path: "Exemple", component: AnimationsExempleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationsRoutingModule {}
