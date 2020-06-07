import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  public dateMenu: {name:string , url: string}[];

  constructor() {
    this.dateMenu = [
      {name:"Déclarer une date" , url: "Date/Declaration"},
      {name:"Les formats des Dates en chaine de caractères" , url: "Date/Format"},
      {name:"Manipuler des timestamps" , url: "Date/Timestamps"},
      {name:"L'Api des objets Date" , url: "Date/Api"},
      {name:"Affichage des dates" , url: "Date/Affichage"},
    ];
   }
}