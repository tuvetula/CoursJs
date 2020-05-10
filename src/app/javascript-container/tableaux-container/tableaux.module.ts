import { NgModule } from "@angular/core";
import { TableauxContainerComponent } from './tableaux-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { TableauxIntroductionComponent } from './tableaux-introduction/tableaux-introduction.component';
import { TableauxAccederProprietesComponent } from './tableaux-acceder-proprietes/tableaux-acceder-proprietes.component';
import { TableauxImbricationComponent } from './tableaux-imbrication/tableaux-imbrication.component';
import { TableauxDecompositionComponent } from './tableaux-decomposition/tableaux-decomposition.component';
import { TableauxAjouterElementsComponent } from './tableaux-ajouter-elements/tableaux-ajouter-elements.component';
import { TableauxSupprimerElementsComponent } from './tableaux-supprimer-elements/tableaux-supprimer-elements.component';
import { TableauxTrouverElementsComponent } from './tableaux-trouver-elements/tableaux-trouver-elements.component';
import { TableauxCopierComponent } from './tableaux-copier/tableaux-copier.component';
import { TableauxFusionnerComponent } from './tableaux-fusionner/tableaux-fusionner.component';
import { TableauxTrierComponent } from './tableaux-trier/tableaux-trier.component';
import { TableauxItererComponent } from './tableaux-iterer/tableaux-iterer.component';
import { TableauxIntroductionProgFonctionnelleComponent } from './tableaux-introduction-prog-fonctionnelle/tableaux-introduction-prog-fonctionnelle.component';
import { TableauxAutresMethodesComponent } from './tableaux-autres-methodes/tableaux-autres-methodes.component';

@NgModule({
    declarations: [TableauxContainerComponent, TableauxIntroductionComponent, TableauxAccederProprietesComponent, TableauxImbricationComponent, TableauxDecompositionComponent, TableauxAjouterElementsComponent, TableauxSupprimerElementsComponent, TableauxTrouverElementsComponent, TableauxCopierComponent, TableauxFusionnerComponent, TableauxTrierComponent, TableauxItererComponent, TableauxIntroductionProgFonctionnelleComponent, TableauxAutresMethodesComponent],
    imports:[CommonModule,RouterModule,CodeFormatModule]
})
export class TableauxModule{}