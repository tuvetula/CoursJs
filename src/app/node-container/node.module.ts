import { NgModule } from "@angular/core";
import { NodeContainerComponent } from './node-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { NodeRoutingModule } from './node-routing.module';
import { NodeIntroductionModule } from './introduction-container/node-introduction.module';
import { ModuleExportRequireModule } from './module-export-require-container/module-export-require.module';
import { NpmModule } from './npm-container/npm.module';
import { NodeEvenementsModule } from './evenements-container/node-evenements.module';
import { NodeSystemeFichiersModule } from './node-systeme-fichiers-container/node-systeme-fichiers.module';
import { NodeServeurNodeModule } from './node-serveur-node-container/node-serveur-node.module';

@NgModule({
    declarations: [
        NodeContainerComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TitlePageModule,
        LessonsMenuModule,
        NodeRoutingModule,
        NodeIntroductionModule,
        ModuleExportRequireModule,
        NodeEvenementsModule,
        NodeSystemeFichiersModule,
        NodeServeurNodeModule,
        NpmModule
    ],
    providers:[]
})

export class NodeModule {}