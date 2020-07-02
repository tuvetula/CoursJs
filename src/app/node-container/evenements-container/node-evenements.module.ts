import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { NodeEvenementsContainerComponent } from "./node-evenements-container.component";
import { NodeEvenementsNodeComponent } from './node-evenements-node/node-evenements-node.component';
import { NodeEvenementsSystemesComponent } from './node-evenements-systemes/node-evenements-systemes.component';
import { NodeEvenementsPersonnalisesComponent } from './node-evenements-personnalises/node-evenements-personnalises.component';
import { NodeEvenementsEventsComponent } from './node-evenements-events/node-evenements-events.component';

@NgModule({
  declarations: [
    NodeEvenementsContainerComponent, 
    NodeEvenementsNodeComponent, 
    NodeEvenementsSystemesComponent, 
    NodeEvenementsPersonnalisesComponent, 
    NodeEvenementsEventsComponent],
  imports: [CommonModule, RouterModule, CodeFormatModule, FlexLayoutModule],
})
export class NodeEvenementsModule {}
