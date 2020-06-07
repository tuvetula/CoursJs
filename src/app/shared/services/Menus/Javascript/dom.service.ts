import { Injectable } from '@angular/core';

@Injectable()
export class DomService {
  public domMenu: {name:string , url: string}[];

  constructor() {
    this.domMenu = [
      {name:"Introduction Dom, Bom, Core et Window" , url: "/Javascript/Dom/Introduction"},
      {name:"Le Dom html" , url: "/Javascript/Dom/Dom-html"},
      {name:"Sélectionner des éléments du Dom" , url: "/Javascript/Dom/Selectionner-elements"},
      {name:"Modifier des éléments du Dom" , url: "/Javascript/Dom/Modifier-elements"},
      {name:"Attributs et propriétés" , url: "/Javascript/Dom/Attributs-proprietes"},
      {name:"L'exemple de l'élément HTMLInputElement" , url: "/Javascript/Dom/HtmlInputElement"},
      {name:"Utilisation de css avec webpack" , url: "/Javascript/Dom/Utilisation-css-webpack"},
      {name:"Modification du style et des classes" , url: "/Javascript/Dom/Modification-style-classes"},
      {name:"Créer des noeuds" , url: "/Javascript/Dom/Creer-noeuds"},
      {name:"Positionner des noeuds" , url: "/Javascript/Dom/Positionner-noeuds"},
      {name:"Supprimer et remplacer des noeuds" , url: "/Javascript/Dom/Supprimer-remplacer-noeuds"}
    ];
   }
}