import { NgModule } from "@angular/core";
import { ReseauContainerComponent } from './reseau-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { ReseauIntroductionComponent } from './reseau-introduction/reseau-introduction.component';
import { ReseauFetchComponent } from './reseau-fetch/reseau-fetch.component';
import { ReseauRequetePostComponent } from './reseau-requete-post/reseau-requete-post.component';
import { ReseauCorsComponent } from './reseau-cors/reseau-cors.component';
import { ReseauOptionsFetchComponent } from './reseau-options-fetch/reseau-options-fetch.component';
import { ReseauAnnulerRequetesComponent } from './reseau-annuler-requetes/reseau-annuler-requetes.component';
import { ReseauFormDataComponent } from './reseau-form-data/reseau-form-data.component';
import { ReseauWebApiUrlComponent } from './reseau-web-api-url/reseau-web-api-url.component';
import { ReseauXmlhttprequestComponent } from './reseau-xmlhttprequest/reseau-xmlhttprequest.component';
import { ReseauUtilisationsAvanceesXmlhttprequestComponent } from './reseau-utilisations-avancees-xmlhttprequest/reseau-utilisations-avancees-xmlhttprequest.component';

@NgModule({
    declarations: [ReseauContainerComponent, ReseauIntroductionComponent, ReseauFetchComponent, ReseauRequetePostComponent, ReseauCorsComponent, ReseauOptionsFetchComponent, ReseauAnnulerRequetesComponent, ReseauFormDataComponent, ReseauWebApiUrlComponent, ReseauXmlhttprequestComponent, ReseauUtilisationsAvanceesXmlhttprequestComponent],
    imports:[CommonModule, RouterModule , FormsModule , CodeFormatModule]
})

export class ReseauModule{}