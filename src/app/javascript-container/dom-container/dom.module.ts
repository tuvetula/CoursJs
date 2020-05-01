import { NgModule } from "@angular/core";
import { DomContainerComponent } from './dom-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { DomIntroductionComponent } from './dom-introduction/dom-introduction.component';
import { DomDomHtmlComponent } from './dom-dom-html/dom-dom-html.component';
import { DomSelectionnerElementsComponent } from './dom-selectionner-elements/dom-selectionner-elements.component';
import { DomModifierElementsComponent } from './dom-modifier-elements/dom-modifier-elements.component';
import { DomAttributsProprietesComponent } from './dom-attributs-proprietes/dom-attributs-proprietes.component';
import { DomHtmlInputElementComponent } from './dom-html-input-element/dom-html-input-element.component';
import { DomUtilisationCssWebpackComponent } from './dom-utilisation-css-webpack/dom-utilisation-css-webpack.component';
import { DomModificationStyleClassesComponent } from './dom-modification-style-classes/dom-modification-style-classes.component';
import { DomCreerNoeudsComponent } from './dom-creer-noeuds/dom-creer-noeuds.component';
import { DomPositionnerNoeudsComponent } from './dom-positionner-noeuds/dom-positionner-noeuds.component';
import { DomSupprimerRemplacerNoeudsComponent } from './dom-supprimer-remplacer-noeuds/dom-supprimer-remplacer-noeuds.component';

@NgModule({
    declarations:[DomContainerComponent, DomIntroductionComponent, DomDomHtmlComponent, DomSelectionnerElementsComponent, DomModifierElementsComponent, DomAttributsProprietesComponent, DomHtmlInputElementComponent, DomUtilisationCssWebpackComponent, DomModificationStyleClassesComponent, DomCreerNoeudsComponent, DomPositionnerNoeudsComponent, DomSupprimerRemplacerNoeudsComponent],
    imports:[CommonModule,RouterModule,FormsModule,CodeFormatModule]
})

export class DomModule{}