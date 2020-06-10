import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  public evenementsMenu: LessonMenuModel[];

  constructor() {
    this.evenementsMenu = [
      {name:"Introduction" , url: "/Javascript/Evenements/Introduction"},
      {name:"Utilisation des propriétés du Dom *on" , url: "/Javascript/Evenements/Utilisation-proprietes-dom",keywords:['This','Proprietes','Dom']},
      {name:"La méthode addEventListener()" , url: "/Javascript/Evenements/addEventListener",keywords:['addEventListener','handleEvent']},
      {name:"Supprimer un gestionnaire d'évènement et déclencher un évènement" , url: "/Javascript/Evenements/Supprimer-gestionnaire-evenement",keywords:['removeEventListener','dispatchEvent','customEvent']},
      {name:"Le bouillonement et la capture" , url: "/Javascript/Evenements/Bouillonement-et-capture",keywords:['Bubbling','Bouillonnement','Capture']},
      {name:"Empecher le comportement par défaut et l'objet event en détails" , url: "/Javascript/Evenements/Empecher-comportement-par-defaut",keywords:['Event','stopPropagation','preventDefault']},
    ];
   }
}