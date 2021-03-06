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
import { NodeSystemeFichiersContainerComponent } from "./node-systeme-fichiers-container/node-systeme-fichiers-container.component"
import { SubscribeGuard } from '../shared/guard/subscribe.guard';
import { FsIntroductionComponent } from './node-systeme-fichiers-container/fs-introduction/fs-introduction.component';
import { FsOuvrirFermerComponent } from './node-systeme-fichiers-container/fs-ouvrir-fermer/fs-ouvrir-fermer.component';
import { FsBinaireEncodageComponent } from './node-systeme-fichiers-container/fs-binaire-encodage/fs-binaire-encodage.component';
import { FsMethodesComponent } from './node-systeme-fichiers-container/fs-methodes/fs-methodes.component';
import { FsMethodesRepertoiresComponent } from './node-systeme-fichiers-container/fs-methodes-repertoires/fs-methodes-repertoires.component';
import { FsMethodesStatsCopyfileComponent } from './node-systeme-fichiers-container/fs-methodes-stats-copyfile/fs-methodes-stats-copyfile.component';
import { NodeServeurNodeIntroductionComponent } from './node-serveur-node-container/node-serveur-node-introduction/node-serveur-node-introduction.component';
import { NodeServeurNodeCreerComponent } from './node-serveur-node-container/node-serveur-node-creer/node-serveur-node-creer.component';
import { NodeServeurNodeRequetesComponent } from './node-serveur-node-container/node-serveur-node-requetes/node-serveur-node-requetes.component';
import { NodeServeurNodeReponsesComponent } from './node-serveur-node-container/node-serveur-node-reponses/node-serveur-node-reponses.component';
import { NodeServeurNodeTemplatesComponent } from './node-serveur-node-container/node-serveur-node-templates/node-serveur-node-templates.component';
import { NodeServeurNodeRoutingComponent } from './node-serveur-node-container/node-serveur-node-routing/node-serveur-node-routing.component';
import { NodeServeurNodeContainerComponent } from './node-serveur-node-container/node-serveur-node-container.component';

const routes: Route[] = [
  {
    path: "Node",
    component: NodeContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [SubscribeGuard],
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
      {
        path: "Systeme-fichiers",
        component: NodeSystemeFichiersContainerComponent,
        children: [
          {
            path: "Introduction",
            component: FsIntroductionComponent
          },
          {
            path: "Ouvrir-fermer-fichier",
            component: FsOuvrirFermerComponent
          },{
            path: "Binaire-encodage-read-write",
            component: FsBinaireEncodageComponent
          },{
            path: "Methodes",
            component: FsMethodesComponent
          },{
            path: "Methodes-repertoires",
            component: FsMethodesRepertoiresComponent
          },{
            path: "Methodes-stats-copyFile",
            component: FsMethodesStatsCopyfileComponent
          },
        ]
      },
      {
        path: "Serveur-Node",
        component: NodeServeurNodeContainerComponent,
        children: [
          {
            path: "Introduction",
            component: NodeServeurNodeIntroductionComponent
          },
          {
            path: "Creer",
            component: NodeServeurNodeCreerComponent
          },{
            path: "Requetes",
            component: NodeServeurNodeRequetesComponent
          },{
            path: "Reponses",
            component: NodeServeurNodeReponsesComponent
          },{
            path: "Templates",
            component: NodeServeurNodeTemplatesComponent
          },{
            path: "Routing",
            component: NodeServeurNodeRoutingComponent
          },
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodeRoutingModule {}
