import { Injectable } from '@angular/core';

@Injectable()
export class RequetesHttpService {

  public requeteHttpMenu: { name: string; url: string }[];

  constructor() { 
    this.requeteHttpMenu = [
      {name: "Introduction aux requêtes http" , url: "/Angular/RequetesHttp/Introduction"},
      {name: "Utilisation de Firebase" , url: "/Angular/RequetesHttp/Utilisation-firebase"},
      {name: "Faire des requêtes http" , url: "/Angular/RequetesHttp/Faire-requetes-http"},
      {name: "Headers et gestion d'erreur" , url: "/Angular/RequetesHttp/Headers-gestion-erreur"},
      {name: "Usage avancés" , url: "/Angular/RequetesHttp/Usage-avances"},
      {name: "Exemple" , url: "/Angular/RequetesHttp/Exemple"}
    ]
  }
}
