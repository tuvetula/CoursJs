import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class RequetesHttpService {

  public requeteHttpMenu: LessonMenuModel[];

  constructor() { 
    this.requeteHttpMenu = [
      {name: "Introduction aux requêtes http" , url: "/Angular/RequetesHttp/Introduction"},
      {name: "Utilisation de Firebase" , url: "/Angular/RequetesHttp/Utilisation-firebase",keywords:['firebase']},
      {name: "Faire des requêtes http" , url: "/Angular/RequetesHttp/Faire-requetes-http",keywords:['requetes','http']},
      {name: "Headers et gestion d'erreur" , url: "/Angular/RequetesHttp/Headers-gestion-erreur",keywords:['errors','headers']},
      {name: "Usage avancés" , url: "/Angular/RequetesHttp/Usage-avances",keywords:['interceptors','reportprogress']},
      {name: "Exemple" , url: "/Angular/RequetesHttp/Exemple"}
    ]
  }
}
