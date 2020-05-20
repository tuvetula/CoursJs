import { Injectable } from "@angular/core";

@Injectable()
export class AuthentificationJwtService {
  public authentificationJwtMenu: { name: string; url: string }[];

  constructor() {
    this.authentificationJwtMenu = [
      { name: "Objectifs", url: "AuthentificationJwt/Objectifs" },
      {
        name: "Préparation de l'application",
        url: "AuthentificationJwt/Preparation-application",
      },
      { name: "Topbar et routing", url: "AuthentificationJwt/Topbar-routing" },
      { name: "Signin/signup", url: "AuthentificationJwt/Signin-signup" },
      {
        name: "Service d'authentification et méthode de signup",
        url: "AuthentificationJwt/Service",
      },
      {
        name: "Methode de signin dans notre service d'authentification",
        url: "AuthentificationJwt/Methode-signin",
      },
      {
        name: "Création des routes express",
        url: "AuthentificationJwt/Creation-route-express",
      },
      {
        name: "Création du token avec express",
        url: "AuthentificationJwt/Creation-token-express",
      },
      {
        name: "Déconnexion de l'utilisateur",
        url: "AuthentificationJwt/Deconnexion",
      },
      {
        name: "Création de la page de profil",
        url: "AuthentificationJwt/Creation-page-profil",
      },
      { name: "Détails du profil", url: "AuthentificationJwt/Details-profil" },
      {
        name: "Création de l'intercepteur et du middleware backend",
        url: "AuthentificationJwt/Creation-intercepteur",
      },
      {
        name: "Gestion de l'expiration du token",
        url: "AuthentificationJwt/Gestion-expiration-token",
      },
    ];
  }
}
