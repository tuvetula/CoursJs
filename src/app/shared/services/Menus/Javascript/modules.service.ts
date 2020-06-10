import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ModulesJsService {
  public modulesJsMenu: LessonMenuModel[];

  constructor() {
    this.modulesJsMenu = [
      {name:"Introduction" , url: "/Javascript/ModulesJs/Introduction"},
      {name:"Exporter" , url: "/Javascript/ModulesJs/Exporter",keywords:['exporter']},
      {name:"Importer" , url: "/Javascript/ModulesJs/Importer",keywords:['importer']},
      {name:"Reexporter et les imports dynamiques" , url: "/Javascript/ModulesJs/Reexporter",keywords:['reexporter','imports','dynamiques']},
    ];
   }
}