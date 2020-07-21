import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ServicesContainerComponent } from "./services-container.component";
import { ServicesDefinitionComponent } from "./services-definition/services-definition.component";
import { ServicesInjectionDefinitionComponent } from "./services-injection-definition/services-injection-definition.component";
import { ServicesHierarchieComponent } from "./services-hierarchie/services-hierarchie.component";
import { ServicesUtilisationComponent } from "./services-utilisation/services-utilisation.component";
import { AddComponent } from './services-utilisation/add/add.component';
import { PanierComponent } from './services-utilisation/panier/panier.component';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    ServicesContainerComponent,
    ServicesDefinitionComponent,
    ServicesInjectionDefinitionComponent,
    ServicesHierarchieComponent,
    ServicesUtilisationComponent,
    AddComponent,
    PanierComponent,
  ],
  imports: [CommonModule, FormsModule, CodeFormatModule , ServicesRoutingModule],
  providers: [],
})
export class ServicesModule {}
