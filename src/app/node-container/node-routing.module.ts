import { NodeContainerComponent } from "./node-container.component";
import { AuthGuard } from "../shared/guard/auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { NodeIntroductionContainerComponent } from "./introduction-container/node-introduction-container.component";
import { JavascriptServeurClientComponent } from "./introduction-container/javascript-serveur-client/javascript-serveur-client.component";
import { V8Component } from "./introduction-container/v8/v8.component";
import { SynchroneAsynchroneComponent } from "./introduction-container/synchrone-asynchrone/synchrone-asynchrone.component";
import { ServeurWebComponent } from "./introduction-container/serveur-web/serveur-web.component";
import { ModuleExportRequireContainerComponent } from "./module-export-require-container/module-export-require-container.component";
import { InterpreteurNodeComponent } from "./module-export-require-container/interpreteur-node/interpreteur-node.component";
import { ModuleExportRequireComponent } from "./module-export-require-container/module-export-require/module-export-require.component";
import { WrapperModuleComponent } from "./module-export-require-container/wrapper-module/wrapper-module.component";
import { RequireAvanceComponent } from "./module-export-require-container/require-avance/require-avance.component";
import { ImporterModulesNatifsComponent } from "./module-export-require-container/importer-modules-natifs/importer-modules-natifs.component";
import { NpmContainerComponent } from "./npm-container/npm-container.component";
import { IntroductionNpmComponent } from "./npm-container/introduction-npm/introduction-npm.component";
import { UtilisationNpmComponent } from "./npm-container/utilisation-npm/utilisation-npm.component";
import { NodeEvenementsContainerComponent } from "./evenements-container/node-evenements-container.component";
import { NodeEvenementsNodeComponent } from "./evenements-container/node-evenements-node/node-evenements-node.component";
import { NodeEvenementsSystemesComponent } from "./evenements-container/node-evenements-systemes/node-evenements-systemes.component";
import { NodeEvenementsPersonnalisesComponent } from "./evenements-container/node-evenements-personnalises/node-evenements-personnalises.component";
import { NodeEvenementsEventsComponent } from "./evenements-container/node-evenements-events/node-evenements-events.component";

const routes: Route[] = [
  {
    path: "Node",
    component: NodeContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "Introduction",
        component: NodeIntroductionContainerComponent,
        children: [
          {
            path: "JavascriptServeurClient",
            component: JavascriptServeurClientComponent,
          },
          {
            path: "V8",
            component: V8Component,
          },
          {
            path: "Synchrone-asynchrone",
            component: SynchroneAsynchroneComponent,
          },
          {
            path: "Serveur-web",
            component: ServeurWebComponent,
          },
        ],
      },
      {
        path: "Module-export-require",
        component: ModuleExportRequireContainerComponent,
        children: [
          {
            path: "Interpreteur-node",
            component: InterpreteurNodeComponent,
          },
          {
            path: "Module-export-require",
            component: ModuleExportRequireComponent,
          },
          {
            path: "Wrapper-module",
            component: WrapperModuleComponent,
          },
          {
            path: "Require-avance",
            component: RequireAvanceComponent,
          },
          {
            path: "Importer-modules-natifs",
            component: ImporterModulesNatifsComponent,
          },
        ],
      },
      {
        path: "Npm",
        component: NpmContainerComponent,
        children: [
          {
            path: "Introduction",
            component: IntroductionNpmComponent,
          },
          {
            path: "Utilisation",
            component: UtilisationNpmComponent,
          },
        ],
      },
      {
        path: "Evenements",
        component: NodeEvenementsContainerComponent,
        children: [
          {
            path: "Evenements-node",
            component: NodeEvenementsNodeComponent,
          },
          {
            path: "Evenements-systemes",
            component: NodeEvenementsSystemesComponent,
          },
          {
            path: "Evenements-personnalises",
            component: NodeEvenementsPersonnalisesComponent,
          },
          {
            path: "Module-events",
            component: NodeEvenementsEventsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodeRoutingModule {}
