import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { RequetesHttpContainerComponent } from './requetes-http-container.component';
import { HttpIntroductionComponent } from './http-introduction/http-introduction.component';
import { HttpUtilisationFirebaseComponent } from './http-utilisation-firebase/http-utilisation-firebase.component';
import { HttpFaireRequetesComponent } from './http-faire-requetes/http-faire-requetes.component';
import { HttpHeadersGestionErreurComponent } from './http-headers-gestion-erreur/http-headers-gestion-erreur.component';
import { HttpUsagesAvancesComponent } from './http-usages-avances/http-usages-avances.component';
import { HttpExempleComponent } from './http-exemple/http-exemple.component';

const routes: Route[] = [
  {
    path: "",
    component: RequetesHttpContainerComponent,
    children: [
        { path: "Introduction", component: HttpIntroductionComponent },
          {
            path: "Utilisation-firebase",
            component: HttpUtilisationFirebaseComponent,
          },
          {
            path: "Faire-requetes-http",
            component: HttpFaireRequetesComponent,
          },
          {
            path: "Headers-gestion-erreur",
            component: HttpHeadersGestionErreurComponent,
          },
          { path: "Usage-avances", component: HttpUsagesAvancesComponent },
          { path: "Exemple", component: HttpExempleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequetesHttpRoutingModule {}
