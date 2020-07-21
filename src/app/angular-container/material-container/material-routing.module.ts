import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
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
import { MaterialContainerComponent } from "./material-container.component";

const routes: Route[] = [
  {
    path: "",
    component: MaterialContainerComponent,
    children: [
      { path: "Installation", component: MaterialInstallationComponent },
      {
        path: "Input-checkbox-slide-toggle",
        component: MaterialInputComponent,
      },
      { path: "FormsField", component: MaterialFormsFieldComponent },
      {
        path: "Select-slider-datepicker",
        component: MaterialSelectComponent,
      },
      { path: "Autocomplete", component: MaterialAutocompleteComponent },
      { path: "Bouton-menu-sidenav", component: MaterialBoutonComponent },
      { path: "Toolbar-list-grid", component: MaterialToolbarComponent },
      { path: "Card-stepper-tabs", component: MaterialCardComponent },
      {
        path: "ExpensionPanel-boutonToggle-chips",
        component: MaterialExpensionComponent,
      },
      {
        path: "Icon-progressSpinner-bar",
        component: MaterialIconComponent,
      },
      {
        path: "Dialog-tooltip-snackbar",
        component: MaterialDialogComponent,
      },
      { path: "Tableaux", component: MaterialTableauxComponent },
      { path: "Pagination", component: MaterialPaginationComponent },
      { path: "Trier-filtrer-tableau", component: MaterialTrierComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
