import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  public stringMenu: LessonMenuModel[];

  constructor() {
    this.stringMenu = [
      {name:"Introduction" , url: "/Javascript/String/Introduction"},
      {name:"Les littéraux de modèle" , url: "/Javascript/String/Litteraux-modele",keywords:['litteraux']},
      {name:"Les propriétés Index et Length" , url: "/Javascript/String/Proprietes-index-length",keywords:['proprietes','index','length']},
      {name:"Les méthodes disponibles sur les chaines de caractères" , url: "/Javascript/String/Methodes",keywords:['methodes']},
      {name:"Les expressions rationnelles" , url: "/Javascript/String/Expressions-rationnelles",keywords:['rationnelles','regexp','regex','expressions','regulieres','match','matchall','search','split','exec','test']},
    ];
   }
}