import { Injectable } from '@angular/core';

@Injectable()
export class NombresService {
  public nombresMenu: {name:string , url: string}[];

  constructor() {
    this.nombresMenu = [
      {name:"Introduction" , url: "/Javascript/Nombres/Introduction"},
      {name:"Décimaux, exposant et notation scientifique" , url: "/Javascript/Nombres/Decimaux-exposant"},
      {name:"Mes méthodes disponibles en global" , url: "/Javascript/Nombres/Methodes-global"},
      {name:"Les méthodes de number" , url: "/Javascript/Nombres/Methodes-number"},
      {name:"L'objet natif Math" , url: "/Javascript/Nombres/Objet-math"},
    ];
   }
}