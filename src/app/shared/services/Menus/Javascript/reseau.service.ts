import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ReseauService {
  public reseauMenu: LessonMenuModel[];

  constructor() {
    this.reseauMenu = [
      {name:"Introduction aux requêtes" , url: "/Javascript/Reseau/Introduction"},
      {name:"Première requête Http avec fetch" , url: "/Javascript/Reseau/Fetch",keywords:['fetch','requetes']},
      {name:"Effectuer une requête Post" , url: "/Javascript/Reseau/Requete-post",keywords:['post','requetes']},
      {name:"Les CORS" , url: "/Javascript/Reseau/Cors",keywords:['cors']},
      {name:"Options avancées des requêtes fetch" , url: "/Javascript/Reseau/Options-fetch",keywords:['fetch','options']},
      {name:"Annuler des requêtes en cours" , url: "/Javascript/Reseau/Annuler-requetes",keywords:['annuler','requetes']},
      {name:"Les objets FormData" , url: "/Javascript/Reseau/FormData",keywords:['formdata']},
      {name:"La Web Api Url" , url: "/Javascript/Reseau/Web-api-url",keywords:['api','url']},
      {name:"XMLHttpRequest" , url: "/Javascript/Reseau/XMLHttpRequest",keywords:['xmlhttprequest']},
      {name:"Utilisations avancées de XMLHttpRequest" , url: "/Javascript/Reseau/Utilisations-avancees-XMLHttpRequest",keywords:['xmlhttprequest','utilisation']},
    ];
   }
}