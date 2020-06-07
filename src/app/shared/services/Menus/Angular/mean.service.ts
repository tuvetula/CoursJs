import { Injectable } from '@angular/core';

@Injectable()
export class MeanService {
  public meanMenu: {name:string , url: string}[];

  constructor() {
    this.meanMenu = [
      {name:"Présentation de la mean stack" , url: "/Angular/Mean/Presentation"},
      {name:"Utilisation de node et d'express" , url: "/Angular/Mean/Utilisation-node-express"},
      {name:"Installation de mongoDB et mongoose" , url: "/Angular/Mean/Installation-mongoDb-mongoose"},
      {name:"Installation d'Angular" , url: "/Angular/Mean/Installation-Angular"},
      {name:"Utilisation d'AWS" , url: "/Angular/Mean/Utilisation-Aws"},
      {name:"Mise en production de l'application" , url: "/Angular/Mean/Mise-en-production"},
    ];
   }
}