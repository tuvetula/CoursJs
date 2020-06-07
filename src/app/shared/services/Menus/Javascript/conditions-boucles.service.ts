import { Injectable } from '@angular/core';

@Injectable()
export class ConditionsBouclesService {
  public conditionsBouclesMenu: {name:string , url: string}[];

  constructor() {
    this.conditionsBouclesMenu = [
      {name:"Les instructions conditionnelles if, else, else if" , url: "/Javascript/Conditions-Boucles/If-else-elseif"},
      {name:"Les instructions conditionnelles: les ternaires" , url: "/Javascript/Conditions-Boucles/Ternaires"},
      {name:"Les instructions conditionnelles: switch" , url: "/Javascript/Conditions-Boucles/Switch"},
      {name:"Les instructions itératives: boucle for" , url: "/Javascript/Conditions-Boucles/Boucle-For"},
      {name:"Les instructions itératives: boucle while" , url: "/Javascript/Conditions-Boucles/Boucle-While"},
    ];
   }
}