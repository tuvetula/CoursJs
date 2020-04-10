import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  public angularMenu: {name:string , url:string}[];
  public angularSousMenu: {name:string , url:string}[];

  constructor() { 
    this.angularMenu = [
      {name: "Composants" , url: "Angular/Composants"},
      {name: "Directives" , url: "Angular/Directives"},
      {name: "Observables" , url: "Angular/Observables"},
      {name: "Services" , url: "Angular/Services"},
      {name: "Routing" , url: "Angular/Routing"},
      {name: "Formulaires" , url: "Angular/Formulaires"},
      {name: "Pipes" , url: "Angular/Pipes"},
      {name: "Requetes Http" , url: "Angular/RequetesHttp"}
    ]
  }
}
