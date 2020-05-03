import { NgModule } from "@angular/core";
import { EvenementsContainerComponent } from './evenements-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { EvenementsIntroductionComponent } from './evenements-introduction/evenements-introduction.component';
import { EvenementsUtilisationProprietesComponent } from './evenements-utilisation-proprietes/evenements-utilisation-proprietes.component';
import { EvenementsAddEventListenerComponent } from './evenements-add-event-listener/evenements-add-event-listener.component';
import { EvenementsSupprimerGestionnaireComponent } from './evenements-supprimer-gestionnaire/evenements-supprimer-gestionnaire.component';
import { EvenementsBouillonementComponent } from './evenements-bouillonement/evenements-bouillonement.component';
import { EvenementsEmpecherComportementComponent } from './evenements-empecher-comportement/evenements-empecher-comportement.component';

@NgModule({
    declarations:[
        EvenementsContainerComponent,
        EvenementsIntroductionComponent,
        EvenementsUtilisationProprietesComponent,
        EvenementsAddEventListenerComponent,
        EvenementsSupprimerGestionnaireComponent,
        EvenementsBouillonementComponent,
        EvenementsEmpecherComportementComponent
    ],
    imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
})

export class EvenementsModule{}