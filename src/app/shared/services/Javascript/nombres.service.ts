import { Injectable } from '@angular/core';

@Injectable()
export class NombresService {
  public nombresMenu: {name:string , url: string}[];

  constructor() {
    this.nombresMenu = [
      {name:"Introduction" , url: "Nombres/Introduction"},
      {name:"Décimaux, exposant et notation scientifique" , url: "Nombres/Decimaux-exposant"},
      {name:"Mes méthodes disponibles en global" , url: "Nombres/Methodes-global"},
      {name:"Les méthodes de number" , url: "Nombres/Methodes-number"},
      {name:"L'objet natif Math" , url: "Nombres/Objet-math"},
    ];
   }
}