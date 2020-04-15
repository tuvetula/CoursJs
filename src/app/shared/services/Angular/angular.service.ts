import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AngularService {
  public angularMenu: {name:string , url:string}[];
  public angularMenuSousMenu: {name:string , url:string}[];
  public title: BehaviorSubject<string> = new BehaviorSubject('Angular');

  constructor() { 
    this.angularMenu = [
      {name: "Composants" , url: "Angular/Composants"},
      {name: "Directives" , url: "Angular/Directives"},
      {name: "Observables" , url: "Angular/Observables"},
      {name: "Services" , url: "Angular/Services"},
      {name: "Routing" , url: "Angular/Routing"},
      {name: "Formulaires" , url: "Angular/Formulaires"},
      {name: "Pipes" , url: "Angular/Pipes"},
      {name: "Requetes-Http" , url: "Angular/RequetesHttp"},
      {name: "Modules" , url: "Angular/Modules"},
      {name: "Animations" , url: "Angular/Animations"},
      {name: "Tests" , url: "Angular/Tests"},
    ]
  }
}
