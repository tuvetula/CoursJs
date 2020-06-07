import { Injectable } from '@angular/core';

@Injectable()
export class ModulesJsService {
  public modulesJsMenu: {name:string , url: string}[];

  constructor() {
    this.modulesJsMenu = [
      {name:"Introduction" , url: "/Javascript/ModulesJs/Introduction"},
      {name:"Exporter" , url: "/Javascript/ModulesJs/Exporter"},
      {name:"Importer" , url: "/Javascript/ModulesJs/Importer"},
      {name:"Reexporter et les imports dynamiques" , url: "/Javascript/ModulesJs/Reexporter"},
    ];
   }
}