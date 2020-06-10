import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class LocationHistoryService {
  public locationHistoryMenu: LessonMenuModel[];

  constructor() {
    this.locationHistoryMenu = [
      {
        name: "La Web Api location",
        url: "/Javascript/LocationAndHistory/Web-api-location",keywords:['api']
      },
      {
        name: "Les méthodes de l'objet location",
        url: "/Javascript/LocationAndHistory/Methodes-location",keywords:['methodes']
      },
      { name: "La Web Api History", url: "/Javascript/LocationAndHistory/Web-api-history",keywords:['api'] },
      {
        name: "L'objet state d'history",
        url: "/Javascript/LocationAndHistory/State-history",keywords:['state']
      },
    ];
  }
}
