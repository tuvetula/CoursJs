import { NgModule } from "@angular/core";
import { NodeContainerComponent } from './node-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NodeRoutingModule } from './node-routing.module';
import { NodeIntroductionModule } from './introduction-container/node-introduction.module';
import { ModuleExportRequireContainerComponent } from './module-export-require-container/module-export-require-container.component';
import { NpmContainerComponent } from './npm-container/npm-container.component';
import { ModuleExportRequireModule } from './module-export-require-container/module-export-require.module';
import { NpmModule } from './npm-container/npm.module';
import { NodeEvenementsModule } from './evenements-container/node-evenements.module';

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
        NpmModule
    ],
    providers:[]
})

export class NodeModule {}