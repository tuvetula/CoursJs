import { Injectable } from '@angular/core';

@Injectable()
export class RequetesHttpService {

  public requeteHttpMenu: { name: string; url: string }[];

  constructor() { 
    this.requeteHttpMenu = [
      {name: "Introduction aux requêtes http" , url: "Introduction"},
      {name: "Utilisation de Firebase" , url: "Utilisation-firebase"},
      {name: "Faire des requêtes http" , url: "Faire-requetes-http"},
      {name: "Headers et gestion d'erreur" , url: "Headers-gestion-erreur"},
      {name: "Usage avancés" , url: "Usage-avances"},
      {name: "Exemple" , url: "Exemple"}
    ]
  }
}
