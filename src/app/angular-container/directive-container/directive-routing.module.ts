import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { DirectiveContainerComponent } from "./directive-container.component";
import { NgIfComponent } from "./ng-if/ng-if.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { DirectivePersoComponent } from "./directive-perso/directive-perso.component";
import { HostlistenerComponent } from "./hostlistener/hostlistener.component";
import { HostbindingComponent } from "./hostbinding/hostbinding.component";
import { LiaisonProprieteDirectiveComponent } from "./liaison-propriete-directive/liaison-propriete-directive.component";
import { DirectiveStructurelleCreationComponent } from "./directive-structurelle-creation/directive-structurelle-creation.component";

const routes: Route[] = [
  {
    path: "",
    component: DirectiveContainerComponent,
    children: [
      { path: "ngIf", component: NgIfComponent },
      { path: "ngFor", component: NgForComponent },
      { path: "ngStyle", component: NgStyleComponent },
      { path: "ngClass", component: NgClassComponent },
      { path: "Directive-attribut", component: DirectivePersoComponent },
      { path: "HostListener", component: HostlistenerComponent },
      { path: "HostBinding", component: HostbindingComponent },
      {
        path: "Liaison-proprietes-directive",
        component: LiaisonProprieteDirectiveComponent,
      },
      {
        path: "Directive-Structurelle",
        component: DirectiveStructurelleCreationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveRoutinggModule {}
