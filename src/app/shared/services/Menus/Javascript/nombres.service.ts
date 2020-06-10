import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class NombresService {
  public nombresMenu: LessonMenuModel[];

  constructor() {
    this.nombresMenu = [
      {name:"Introduction" , url: "/Javascript/Nombres/Introduction"},
      {name:"Décimaux, exposant et notation scientifique" , url: "/Javascript/Nombres/Decimaux-exposant",keywords:['decimaux','exposant']},
      {name:"Mes méthodes disponibles en global" , url: "/Javascript/Nombres/Methodes-global",keywords:['methodes','global']},
      {name:"Les méthodes de number" , url: "/Javascript/Nombres/Methodes-number",keywords:['methodes']},
      {name:"L'objet natif Math" , url: "/Javascript/Nombres/Objet-math",keywords:['math']},
    ];
   }
}