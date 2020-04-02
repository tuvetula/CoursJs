import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {
  public serviceMenu: {name: string, url: string}[];

  constructor() { 
    this.serviceMenu = [
      {name:"Definition service" , url:"Definition-service"},
      {name:"Definition injection de dépendances" , url:"Definition-injection-dependances"},
      {name:"Hiérarchie injection de dépendances" , url:"Hierarchie"},
      {name:"Utilisation" , url:"Utilisation"},      
    ]
  }
}
