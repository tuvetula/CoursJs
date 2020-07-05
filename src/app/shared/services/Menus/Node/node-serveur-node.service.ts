import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class NodeServeurNodeService {
  public nodeServeurNodeMenu: LessonMenuModel[];
  constructor() { 
    this.nodeServeurNodeMenu = [
      {
        name: "Introduction aux protocoles web",
        url: "/Node/Serveur-Node/Introduction",
        keywords: []
      },
      {
        name: "Créer un serveur HTTP avec Node.js",
        url: "/Node/Serveur-Node/Creer",
        keywords: []
      },{
        name: "Les requêtes HTTP",
        url: "/Node/Serveur-Node/Requetes",
        keywords: []
      },{
        name: "Les réponses HTTP",
        url: "/Node/Serveur-Node/Reponses",
        keywords: []
      },{
        name: "Les templates",
        url: "/Node/Serveur-Node/Templates",
        keywords: []
      },{
        name: "Le Routing",
        url: "/Node/Serveur-Node/Routing",
        keywords: []
      },
    ]
  }
}
