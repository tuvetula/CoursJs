import { Injectable } from '@angular/core';

@Injectable()
export class DomService {
  public domMenu: {name:string , url: string}[];

  constructor() {
    this.domMenu = [
      {name:"Introduction Dom, Bom, Core et Window" , url: "Dom/Introduction"},
      {name:"Le Dom html" , url: "Dom/Dom-html"},
      {name:"Sélectionner des éléments du Dom" , url: "Dom/Selectionner-elements"},
      {name:"Modifier des éléments du Dom" , url: "Dom/Modifier-elements"},
      {name:"Attributs et propriétés" , url: "Dom/Attributs-proprietes"},
      {name:"L'exemple de l'élément HTMLInputElement" , url: "Dom/HtmlInputElement"},
      {name:"Utilisation de css avec webpack" , url: "Dom/Utilisation-css-webpack"},
      {name:"Modification du style et des classes" , url: "Dom/Modification-style-classes"},
      {name:"Créer des noeuds" , url: "Dom/Creer-noeuds"},
      {name:"Positionner des noeuds" , url: "Dom/Positionner-noeuds"},
      {name:"Supprimer et remplacer des noeuds" , url: "Dom/Supprimer-remplacer-noeuds"}
    ];
   }
}