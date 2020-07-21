import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AuthentificationJwtContainerComponent } from "./authentification-jwt-container.component";
import { AuthentificationJwtGestionExpirationTokenComponent } from "./authentification-jwt-gestion-expiration-token/authentification-jwt-gestion-expiration-token.component";
import { AuthentificationJwtCreationIntercepteurComponent } from "./authentification-jwt-creation-intercepteur/authentification-jwt-creation-intercepteur.component";
import { AuthentificationJwtDetailsProfilComponent } from "./authentification-jwt-details-profil/authentification-jwt-details-profil.component";
import { AuthentificationJwtCreationPageProfilComponent } from "./authentification-jwt-creation-page-profil/authentification-jwt-creation-page-profil.component";
import { AuthentificationJwtDeconnexionUtilisateurComponent } from "./authentification-jwt-deconnexion-utilisateur/authentification-jwt-deconnexion-utilisateur.component";
import { AuthentificationJwtCreationTokenComponent } from "./authentification-jwt-creation-token/authentification-jwt-creation-token.component";
import { AuthentificationJwtCreationRouteExpressComponent } from "./authentification-jwt-creation-route-express/authentification-jwt-creation-route-express.component";
import { AuthentificationJwtMethodeSigninComponent } from "./authentification-jwt-methode-signin/authentification-jwt-methode-signin.component";
import { AuthentificationJwtServiceAuthComponent } from "./authentification-jwt-service-auth/authentification-jwt-service-auth.component";
import { AuthentificationJwtSigninSignupComponent } from "./authentification-jwt-signin-signup/authentification-jwt-signin-signup.component";
import { AuthentificationJwtTopbarRoutingComponent } from "./authentification-jwt-topbar-routing/authentification-jwt-topbar-routing.component";
import { AuthentificationJwtPreparationApplicationComponent } from "./authentification-jwt-preparation-application/authentification-jwt-preparation-application.component";
import { AuthentificationJwtObjectifsComponent } from "./authentification-jwt-objectifs/authentification-jwt-objectifs.component";

const routes: Route[] = [
  {
    path: "",
    component: AuthentificationJwtContainerComponent,
    children: [
      {
        path: "Objectifs",
        component: AuthentificationJwtObjectifsComponent,
      },
      {
        path: "Preparation-application",
        component: AuthentificationJwtPreparationApplicationComponent,
      },
      {
        path: "Topbar-routing",
        component: AuthentificationJwtTopbarRoutingComponent,
      },
      {
        path: "Signin-signup",
        component: AuthentificationJwtSigninSignupComponent,
      },
      {
        path: "Service",
        component: AuthentificationJwtServiceAuthComponent,
      },
      {
        path: "Methode-signin",
        component: AuthentificationJwtMethodeSigninComponent,
      },
      {
        path: "Creation-route-express",
        component: AuthentificationJwtCreationRouteExpressComponent,
      },
      {
        path: "Creation-token-express",
        component: AuthentificationJwtCreationTokenComponent,
      },
      {
        path: "Deconnexion",
        component: AuthentificationJwtDeconnexionUtilisateurComponent,
      },
      {
        path: "Creation-page-profil",
        component: AuthentificationJwtCreationPageProfilComponent,
      },
      {
        path: "Details-profil",
        component: AuthentificationJwtDetailsProfilComponent,
      },
      {
        path: "Creation-intercepteur",
        component: AuthentificationJwtCreationIntercepteurComponent,
      },
      {
        path: "Gestion-expiration-token",
        component: AuthentificationJwtGestionExpirationTokenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationJwtRoutingModule {}
