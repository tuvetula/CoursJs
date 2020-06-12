import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  public domMenu: LessonMenuModel[];

  constructor() {
    this.domMenu = [
      {name:"Introduction Dom, Bom, Core et Window" , url: "/Javascript/Dom/Introduction",keywords:['bom','core','window']},
      {name:"Le Dom html" , url: "/Javascript/Dom/Dom-html",keywords:['html']},
      {name:"Sélectionner des éléments du Dom" , url: "/Javascript/Dom/Selectionner-elements",keywords:['selectionner']},
      {name:"Modifier des éléments du Dom" , url: "/Javascript/Dom/Modifier-elements",keywords:['modifier']},
      {name:"Attributs et propriétés" , url: "/Javascript/Dom/Attributs-proprietes",keywords:['attributs','proprietes']},
      {name:"L'exemple de l'élément HTMLInputElement" , url: "/Javascript/Dom/HtmlInputElement",keywords:['HTMLInputElement']},
      {name:"Utilisation de css avec webpack" , url: "/Javascript/Dom/Utilisation-css-webpack",keywords:['css','webpack']},
      {name:"Modification du style et des classes" , url: "/Javascript/Dom/Modification-style-classes",keywords:['className','classList']},
      {name:"Créer des noeuds" , url: "/Javascript/Dom/Creer-noeuds",keywords:['noeuds']},
      {name:"Positionner des noeuds" , url: "/Javascript/Dom/Positionner-noeuds",keywords:['noeuds','positionner']},
      {name:"Supprimer et remplacer des noeuds" , url: "/Javascript/Dom/Supprimer-remplacer-noeuds",keywords:['replacewith','replacechild','removechild']}
    ];
   }
}