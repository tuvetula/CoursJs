import { Injectable } from '@angular/core';

@Injectable()
export class ModulesJsService {
  public modulesJsMenu: {name:string , url: string}[];

  constructor() {
    this.modulesJsMenu = [
      {name:"Introduction" , url: "ModulesJs/Introduction"},
      {name:"Exporter" , url: "ModulesJs/Exporter"},
      {name:"Importer" , url: "ModulesJs/Importer"},
      {name:"Reexporter et les imports dynamiques" , url: "ModulesJs/Reexporter"},
    ];
   }
}