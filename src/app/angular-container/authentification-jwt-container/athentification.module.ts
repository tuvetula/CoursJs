import { NgModule } from "@angular/core";
import { AuthentificationJwtContainerComponent } from './authentification-jwt-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { AuthentificationJwtObjectifsComponent } from './authentification-jwt-objectifs/authentification-jwt-objectifs.component';
import { AuthentificationJwtPreparationApplicationComponent } from './authentification-jwt-preparation-application/authentification-jwt-preparation-application.component';
import { AuthentificationJwtTopbarRoutingComponent } from './authentification-jwt-topbar-routing/authentification-jwt-topbar-routing.component';
import { AuthentificationJwtSigninSignupComponent } from './authentification-jwt-signin-signup/authentification-jwt-signin-signup.component';
import { AuthentificationJwtServiceAuthComponent } from './authentification-jwt-service-auth/authentification-jwt-service-auth.component';
import { AuthentificationJwtMethodeSigninComponent } from './authentification-jwt-methode-signin/authentification-jwt-methode-signin.component';
import { AuthentificationJwtCreationRouteExpressComponent } from './authentification-jwt-creation-route-express/authentification-jwt-creation-route-express.component';
import { AuthentificationJwtCreationTokenComponent } from './authentification-jwt-creation-token/authentification-jwt-creation-token.component';
import { AuthentificationJwtDeconnexionUtilisateurComponent } from './authentification-jwt-deconnexion-utilisateur/authentification-jwt-deconnexion-utilisateur.component';
import { AuthentificationJwtCreationPageProfilComponent } from './authentification-jwt-creation-page-profil/authentification-jwt-creation-page-profil.component';
import { AuthentificationJwtDetailsProfilComponent } from './authentification-jwt-details-profil/authentification-jwt-details-profil.component';
import { AuthentificationJwtCreationIntercepteurComponent } from './authentification-jwt-creation-intercepteur/authentification-jwt-creation-intercepteur.component';
import { AuthentificationJwtGestionExpirationTokenComponent } from './authentification-jwt-gestion-expiration-token/authentification-jwt-gestion-expiration-token.component';

@NgModule({
    declarations: [AuthentificationJwtContainerComponent, AuthentificationJwtObjectifsComponent, AuthentificationJwtPreparationApplicationComponent, AuthentificationJwtTopbarRoutingComponent, AuthentificationJwtSigninSignupComponent, AuthentificationJwtServiceAuthComponent, AuthentificationJwtMethodeSigninComponent, AuthentificationJwtCreationRouteExpressComponent, AuthentificationJwtCreationTokenComponent, AuthentificationJwtDeconnexionUtilisateurComponent, AuthentificationJwtCreationPageProfilComponent, AuthentificationJwtDetailsProfilComponent, AuthentificationJwtCreationIntercepteurComponent, AuthentificationJwtGestionExpirationTokenComponent],
    imports: [CommonModule, RouterModule , CodeFormatModule]
})
export class AuthentificationJwtModule{}