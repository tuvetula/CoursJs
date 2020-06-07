import { Injectable } from '@angular/core';

@Injectable()
export class StringService {
  public stringMenu: {name:string , url: string}[];

  constructor() {
    this.stringMenu = [
      {name:"Introduction" , url: "/Javascript/String/Introduction"},
      {name:"Les littéraux de modèle" , url: "/Javascript/String/Litteraux-modele"},
      {name:"Les propriétés Index et Length" , url: "/Javascript/String/Proprietes-index-length"},
      {name:"Les méthodes disponibles sur les chaines de caractères" , url: "/Javascript/String/Methodes"},
      {name:"Les expressions rationnelles" , url: "/Javascript/String/Expressions-rationnelles"},
    ];
   }
}