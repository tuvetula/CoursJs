import { Injectable } from '@angular/core';

@Injectable()
export class ReseauService {
  public reseauMenu: {name:string , url: string}[];

  constructor() {
    this.reseauMenu = [
      {name:"Introduction aux requêtes" , url: "Reseau/Introduction"},
      {name:"Première requête Http avec fetch" , url: "Reseau/Fetch"},
      {name:"Effectuer une requête Post" , url: "Reseau/Requete-post"},
      {name:"Les CORS" , url: "Reseau/Cors"},
      {name:"Options avancées des requêtes fetch" , url: "Reseau/Options-fetch"},
      {name:"Annuler des requêtes en cours" , url: "Reseau/Annuler-requetes"},
      {name:"Les objets FormData" , url: "Reseau/FormData"},
      {name:"La Web Api Url" , url: "Reseau/Web-api-url"},
      {name:"XMLHttpRequest" , url: "Reseau/XMLHttpRequest"},
      {name:"Utilisations avancées de XMLHttpRequest" , url: "Reseau/Utilisations-avancees-XMLHttpRequest"},
    ];
   }
}