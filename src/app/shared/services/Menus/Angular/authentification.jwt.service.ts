import { Injectable } from "@angular/core";

@Injectable()
export class AuthentificationJwtService {
  public authentificationJwtMenu: { name: string; url: string }[];

  constructor() {
    this.authentificationJwtMenu = [
      { name: "Objectifs", url: "/Angular/AuthentificationJwt/Objectifs" },
      {
        name: "Préparation de l'application",
        url: "/Angular/AuthentificationJwt/Preparation-application",
      },
      { name: "Topbar et routing", url: "/Angular/AuthentificationJwt/Topbar-routing" },
      { name: "Signin/signup", url: "/Angular/AuthentificationJwt/Signin-signup" },
      {
        name: "Service d'authentification et méthode de signup",
        url: "/Angular/AuthentificationJwt/Service",
      },
      {
        name: "Methode de signin dans notre service d'authentification",
        url: "/Angular/AuthentificationJwt/Methode-signin",
      },
      {
        name: "Création des routes express",
        url: "/Angular/AuthentificationJwt/Creation-route-express",
      },
      {
        name: "Création du token avec express",
        url: "/Angular/AuthentificationJwt/Creation-token-express",
      },
      {
        name: "Déconnexion de l'utilisateur",
        url: "/Angular/AuthentificationJwt/Deconnexion",
      },
      {
        name: "Création de la page de profil",
        url: "/Angular/AuthentificationJwt/Creation-page-profil",
      },
      { name: "Détails du profil", url: "/Angular/AuthentificationJwt/Details-profil" },
      {
        name: "Création de l'intercepteur et du middleware backend",
        url: "/Angular/AuthentificationJwt/Creation-intercepteur",
      },
      {
        name: "Gestion de l'expiration du token",
        url: "/Angular/AuthentificationJwt/Gestion-expiration-token",
      },
    ];
  }
}
