import { NgModule } from "@angular/core";
import { NodeServeurNodeContainerComponent } from './node-serveur-node-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { NodeServeurNodeIntroductionComponent } from './node-serveur-node-introduction/node-serveur-node-introduction.component';
import { NodeServeurNodeCreerComponent } from './node-serveur-node-creer/node-serveur-node-creer.component';
import { NodeServeurNodeRequetesComponent } from './node-serveur-node-requetes/node-serveur-node-requetes.component';
import { NodeServeurNodeReponsesComponent } from './node-serveur-node-reponses/node-serveur-node-reponses.component';
import { NodeServeurNodeTemplatesComponent } from './node-serveur-node-templates/node-serveur-node-templates.component';
import { NodeServeurNodeRoutingComponent } from './node-serveur-node-routing/node-serveur-node-routing.component';

@NgModule({
    declarations: [
        NodeServeurNodeContainerComponent,
        NodeServeurNodeIntroductionComponent,
        NodeServeurNodeCreerComponent,
        NodeServeurNodeRequetesComponent,
        NodeServeurNodeReponsesComponent,
        NodeServeurNodeTemplatesComponent,
        NodeServeurNodeRoutingComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        CodeFormatModule
    ]
})
export class NodeServeurNodeModule{}