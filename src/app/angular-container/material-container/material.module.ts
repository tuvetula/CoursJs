import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { MaterialInstallationComponent } from "./material-installation/material-installation.component";
import { MaterialInputComponent } from "./material-input/material-input.component";
import { MaterialFormsFieldComponent } from "./material-forms-field/material-forms-field.component";
import { MaterialSelectComponent } from "./material-select/material-select.component";
import { MaterialAutocompleteComponent } from "./material-autocomplete/material-autocomplete.component";
import { MaterialBoutonComponent } from "./material-bouton/material-bouton.component";
import { MaterialToolbarComponent } from "./material-toolbar/material-toolbar.component";
import { MaterialCardComponent } from "./material-card/material-card.component";
import { MaterialExpensionComponent } from "./material-expension/material-expension.component";
import { MaterialIconComponent } from "./material-icon/material-icon.component";
import { MaterialDialogComponent } from "./material-dialog/material-dialog.component";
import { MaterialTableauxComponent } from "./material-tableaux/material-tableaux.component";
import { MaterialPaginationComponent } from "./material-pagination/material-pagination.component";
import { MaterialTrierComponent } from "./material-trier/material-trier.component";
import { MaterialRoutingModule } from "./material-routing.module";
import { MaterialContainerComponent } from './material-container.component';

@NgModule({
  declarations: [
    MaterialContainerComponent,
    MaterialInstallationComponent,
    MaterialInputComponent,
    MaterialFormsFieldComponent,
    MaterialSelectComponent,
    MaterialAutocompleteComponent,
    MaterialBoutonComponent,
    MaterialToolbarComponent,
    MaterialCardComponent,
    MaterialExpensionComponent,
    MaterialIconComponent,
    MaterialDialogComponent,
    MaterialTableauxComponent,
    MaterialPaginationComponent,
    MaterialTrierComponent
  ],
  imports: [
    CommonModule,
    CodeFormatModule,
    MaterialRoutingModule,
  ]
})
export class MaterialCoursModule {}
