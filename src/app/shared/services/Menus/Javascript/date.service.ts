import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  public dateMenu: {name:string , url: string}[];

  constructor() {
    this.dateMenu = [
      {name:"Déclarer une date" , url: "/Javascript/Date/Declaration"},
      {name:"Les formats des Dates en chaine de caractères" , url: "/Javascript/Date/Format"},
      {name:"Manipuler des timestamps" , url: "/Javascript/Date/Timestamps"},
      {name:"L'Api des objets Date" , url: "/Javascript/Date/Api"},
      {name:"Affichage des dates" , url: "/Javascript/Date/Affichage"},
    ];
   }
}