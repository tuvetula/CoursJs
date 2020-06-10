import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public dateMenu: LessonMenuModel[];

  constructor() {
    this.dateMenu = [
      {name:"Déclarer une date" , url: "/Javascript/Date/Declaration",keywords:['declaration']},
      {name:"Les formats des Dates en chaine de caractères" , url: "/Javascript/Date/Format",keywords:['formats']},
      {name:"Manipuler des timestamps" , url: "/Javascript/Date/Timestamps",keywords:['timestamps']},
      {name:"L'Api des objets Date" , url: "/Javascript/Date/Api",keywords:['api']},
      {name:"Affichage des dates" , url: "/Javascript/Date/Affichage",keywords:['affichage']},
    ];
   }
}