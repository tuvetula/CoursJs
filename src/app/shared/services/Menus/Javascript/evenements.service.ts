import { Injectable } from '@angular/core';

@Injectable()
export class EvenementsService {
  public evenementsMenu: {name:string , url: string}[];

  constructor() {
    this.evenementsMenu = [
      {name:"Introduction" , url: "/Javascript/Evenements/Introduction"},
      {name:"Utilisation des propriétés du Dom *on" , url: "/Javascript/Evenements/Utilisation-proprietes-dom"},
      {name:"La méthode addEventListener()" , url: "/Javascript/Evenements/addEventListener"},
      {name:"Supprimer un gestionnaire d'évènement et déclencher un évènement" , url: "/Javascript/Evenements/Supprimer-gestionnaire-evenement"},
      {name:"Le bouillonement et la capture" , url: "/Javascript/Evenements/Bouillonement-et-capture"},
      {name:"Empecher le comportement par défaut et l'objet event en détails" , url: "/Javascript/Evenements/Empecher-comportement-par-defaut"},
    ];
   }
}