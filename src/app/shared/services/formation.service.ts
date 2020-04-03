import { Injectable } from '@angular/core';

@Injectable()
export class FormationService {
  public formationMenu: {name:string , url:string}[];

  constructor() { 
    this.formationMenu = [
      {name: "Les composants" , url:'Composants'},
      {name: "Les directives" , url:'Directives'},

    ]
  }
}
