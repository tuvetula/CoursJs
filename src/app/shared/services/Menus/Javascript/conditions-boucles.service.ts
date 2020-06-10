import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ConditionsBouclesService {
  public conditionsBouclesMenu: LessonMenuModel[];

  constructor() {
    this.conditionsBouclesMenu = [
      {name:"Les instructions conditionnelles if, else, else if" , url: "/Javascript/Conditions-Boucles/If-else-elseif",keywords:['if','else','elseif']},
      {name:"Les instructions conditionnelles: les ternaires" , url: "/Javascript/Conditions-Boucles/Ternaires",keywords:['ternaires']},
      {name:"Les instructions conditionnelles: switch" , url: "/Javascript/Conditions-Boucles/Switch",keywords:['switch']},
      {name:"Les instructions itératives: boucle for" , url: "/Javascript/Conditions-Boucles/Boucle-For",keywords:['for']},
      {name:"Les instructions itératives: boucle while" , url: "/Javascript/Conditions-Boucles/Boucle-While",keywords:['while']},
    ];
   }
}