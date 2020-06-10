import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class MeanService {
  public meanMenu: LessonMenuModel[];

  constructor() {
    this.meanMenu = [
      {name:"Présentation de la mean stack" , url: "/Angular/Mean/Presentation"},
      {name:"Utilisation de node et d'express" , url: "/Angular/Mean/Utilisation-node-express" , keywords:['node','express']},
      {name:"Installation de mongoDB et mongoose" , url: "/Angular/Mean/Installation-mongoDb-mongoose" , keywords:['mongodb','mongoose']},
      {name:"Installation d'Angular" , url: "/Angular/Mean/Installation-Angular"},
      {name:"Utilisation d'AWS" , url: "/Angular/Mean/Utilisation-Aws" , keywords:['aws']},
      {name:"Mise en production de l'application" , url: "/Angular/Mean/Mise-en-production" , keywords:['production']},
    ];
   }
}