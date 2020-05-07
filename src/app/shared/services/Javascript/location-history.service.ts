import { Injectable } from '@angular/core';

@Injectable()
export class LocationHistoryService {
  public locationHistoryMenu: { name: string; url: string }[];

  constructor() {
    this.locationHistoryMenu = [
      {
        name: "La Web Api location",
        url: "LocationAndHistory/Web-api-location",
      },
      {
        name: "Les méthodes de l'objet location",
        url: "LocationAndHistory/Methodes-location",
      },
      { name: "La Web Api History", url: "LocationAndHistory/Web-api-history" },
      {
        name: "L'objet state d'history",
        url: "LocationAndHistory/State-history",
      },
    ];
  }
}
