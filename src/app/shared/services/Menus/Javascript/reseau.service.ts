import { Injectable } from '@angular/core';

@Injectable()
export class ReseauService {
  public reseauMenu: {name:string , url: string}[];

  constructor() {
    this.reseauMenu = [
      {name:"Introduction aux requêtes" , url: "/Javascript/Reseau/Introduction"},
      {name:"Première requête Http avec fetch" , url: "/Javascript/Reseau/Fetch"},
      {name:"Effectuer une requête Post" , url: "/Javascript/Reseau/Requete-post"},
      {name:"Les CORS" , url: "/Javascript/Reseau/Cors"},
      {name:"Options avancées des requêtes fetch" , url: "/Javascript/Reseau/Options-fetch"},
      {name:"Annuler des requêtes en cours" , url: "/Javascript/Reseau/Annuler-requetes"},
      {name:"Les objets FormData" , url: "/Javascript/Reseau/FormData"},
      {name:"La Web Api Url" , url: "/Javascript/Reseau/Web-api-url"},
      {name:"XMLHttpRequest" , url: "/Javascript/Reseau/XMLHttpRequest"},
      {name:"Utilisations avancées de XMLHttpRequest" , url: "/Javascript/Reseau/Utilisations-avancees-XMLHttpRequest"},
    ];
   }
}