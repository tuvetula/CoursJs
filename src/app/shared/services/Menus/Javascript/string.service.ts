import { Injectable } from '@angular/core';

@Injectable()
export class StringService {
  public stringMenu: {name:string , url: string}[];

  constructor() {
    this.stringMenu = [
      {name:"Introduction" , url: "String/Introduction"},
      {name:"Les littéraux de modèle" , url: "String/Litteraux-modele"},
      {name:"Les propriétés Index et Length" , url: "String/Proprietes-index-length"},
      {name:"Les méthodes disponibles sur les chaines de caractères" , url: "String/Methodes"},
      {name:"Les expressions rationnelles" , url: "String/Expressions-rationnelles"},
    ];
   }
}