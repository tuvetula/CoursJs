import { Injectable } from '@angular/core';

@Injectable()
export class RequetesHttpService {

  public requeteHttpMenu: { name: string; url: string }[];

  constructor() { 
    this.requeteHttpMenu = [
      {name: "Introduction aux requêtes http" , url: "RequetesHttp/Introduction"},
      {name: "Utilisation de Firebase" , url: "RequetesHttp/Utilisation-firebase"},
      {name: "Faire des requêtes http" , url: "RequetesHttp/Faire-requetes-http"},
      {name: "Headers et gestion d'erreur" , url: "RequetesHttp/Headers-gestion-erreur"},
      {name: "Usage avancés" , url: "RequetesHttp/Usage-avances"},
      {name: "Exemple" , url: "RequetesHttp/Exemple"}
    ]
  }
}
