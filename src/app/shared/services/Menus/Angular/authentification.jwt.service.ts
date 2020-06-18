import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationJwtService {
  public authentificationJwtMenu: LessonMenuModel[];

  constructor() {
    this.authentificationJwtMenu = [
      { name: "Objectifs", url: "/Angular/AuthentificationJwt/Objectifs" },
      {
        name: "Préparation de l'application",
        url: "/Angular/AuthentificationJwt/Preparation-application",
      },
      { name: "Topbar et routing", url: "/Angular/AuthentificationJwt/Topbar-routing" , keywords:['topbar','routing'] },
      { name: "Signin/signup", url: "/Angular/AuthentificationJwt/Signin-signup" , keywords:['signin','signup'] },
      {
        name: "Service d'authentification et méthode de signup",
        url: "/Angular/AuthentificationJwt/Service" , keywords:['methode','signup']
      },
      {
        name: "Méthode de signin dans notre service d'authentification",
        url: "/Angular/AuthentificationJwt/Methode-signin" , keywords:['methode','signin']
      },
      {
        name: "Création des routes express",
        url: "/Angular/AuthentificationJwt/Creation-route-express" , keywords:['routes','express']
      },
      {
        name: "Création du token avec express",
        url: "/Angular/AuthentificationJwt/Creation-token-express" , keywords:['token','express']
      },
      {
        name: "Déconnexion de l'utilisateur",
        url: "/Angular/AuthentificationJwt/Deconnexion" , keywords:['deconnexion']
      },
      {
        name: "Création de la page de profil",
        url: "/Angular/AuthentificationJwt/Creation-page-profil" , keywords:['creation','profil','guard']
      },
      { name: "Détails du profil", url: "/Angular/AuthentificationJwt/Details-profil" , keywords:['details','profil'] },
      {
        name: "Création de l'intercepteur et du middleware backend",
        url: "/Angular/AuthentificationJwt/Creation-intercepteur" , keywords:['intercepteur','middleware']
      },
      {
        name: "Gestion de l'expiration du token",
        url: "/Angular/AuthentificationJwt/Gestion-expiration-token" , keywords:['token','expiration']
      },
    ];
  }
}
