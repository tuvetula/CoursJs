import { NgModule } from "@angular/core";
import { FonctionsContainerComponent } from './fonctions-container.component';
import { CommonModule } from '@angular/common';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { FonctionsExpressionsDeclarationComponent } from './fonctions-expressions-declaration/fonctions-expressions-declaration.component';
import { FonctionsParametresArgumentsComponent } from './fonctions-parametres-arguments/fonctions-parametres-arguments.component';
import { FonctionsObjetArgumentsComponent } from './fonctions-objet-arguments/fonctions-objet-arguments.component';
import { FonctionsValeurRetourComponent } from './fonctions-valeur-retour/fonctions-valeur-retour.component';
import { FonctionsEnvironnementLexicalComponent } from './fonctions-environnement-lexical/fonctions-environnement-lexical.component';
import { FonctionsChainePorteeComponent } from './fonctions-chaine-portee/fonctions-chaine-portee.component';
import { FonctionsNamespaceComponent } from './fonctions-namespace/fonctions-namespace.component';
import { FonctionsMotclefThisComponent } from './fonctions-motclef-this/fonctions-motclef-this.component';
import { FonctionsDefinirLierThisComponent } from './fonctions-definir-lier-this/fonctions-definir-lier-this.component';
import { FonctionsFonctionsFlecheesComponent } from './fonctions-fonctions-flechees/fonctions-fonctions-flechees.component';
import { FonctionsFonctionsRappelComponent } from './fonctions-fonctions-rappel/fonctions-fonctions-rappel.component';
import { FonctionsFermeturesComponent } from './fonctions-fermetures/fonctions-fermetures.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FonctionsContainerComponent, FonctionsExpressionsDeclarationComponent, FonctionsParametresArgumentsComponent, FonctionsObjetArgumentsComponent, FonctionsValeurRetourComponent, FonctionsEnvironnementLexicalComponent, FonctionsChainePorteeComponent, FonctionsNamespaceComponent, FonctionsMotclefThisComponent, FonctionsDefinirLierThisComponent, FonctionsFonctionsFlecheesComponent, FonctionsFonctionsRappelComponent, FonctionsFermeturesComponent],
    imports: [CommonModule,RouterModule,CodeFormatModule]
})
export class FonctionsModule{}