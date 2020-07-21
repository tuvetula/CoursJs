import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RequetesHttpContainerComponent } from "./requetes-http-container.component";
import { HttpIntroductionComponent } from "./http-introduction/http-introduction.component";
import { HttpUtilisationFirebaseComponent } from "./http-utilisation-firebase/http-utilisation-firebase.component";
import { HttpFaireRequetesComponent } from "./http-faire-requetes/http-faire-requetes.component";
import { HttpHeadersGestionErreurComponent } from "./http-headers-gestion-erreur/http-headers-gestion-erreur.component";
import { HttpUsagesAvancesComponent } from "./http-usages-avances/http-usages-avances.component";
import { HttpExempleComponent } from "./http-exemple/http-exemple.component";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { RequetesHttpRoutingModule } from './requetes-http-routing.module';

@NgModule({
  declarations: [
    RequetesHttpContainerComponent,
    HttpIntroductionComponent,
    HttpUtilisationFirebaseComponent,
    HttpFaireRequetesComponent,
    HttpHeadersGestionErreurComponent,
    HttpUsagesAvancesComponent,
    HttpExempleComponent,
  ],
  imports: [CommonModule, FormsModule, CodeFormatModule, RequetesHttpRoutingModule],
  providers: [],
})
export class RequetesHttpModule {}
