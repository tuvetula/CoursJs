import { Injectable } from '@angular/core';

@Injectable()
export class MeanService {
  public meanMenu: {name:string , url: string}[];

  constructor() {
    this.meanMenu = [
      {name:"Présentation de la mean stack" , url: "Mean/Presentation"},
      {name:"Utilisation de node et d'express" , url: "Mean/Utilisation-node-express"},
      {name:"Installation de mongoDB et mongoose" , url: "Mean/Installation-mongoDb-mongoose"},
      {name:"Installation d'Angular" , url: "Mean/Installation-Angular"},
      {name:"Utilisation d'AWS" , url: "Mean/Utilisation-Aws"},
      {name:"Mise en production de l'application" , url: "Mean/Mise-en-production"},
    ];
   }
}