import { Injectable } from '@angular/core';

@Injectable()
export class ConditionsBouclesService {
  public conditionsBouclesMenu: {name:string , url: string}[];

  constructor() {
    this.conditionsBouclesMenu = [
      {name:"Les instructions conditionnelles if, else, else if" , url: "Conditions-Boucles/If-else-elseif"},
      {name:"Les instructions conditionnelles: les ternaires" , url: "Conditions-Boucles/Ternaires"},
      {name:"Les instructions conditionnelles: switch" , url: "Conditions-Boucles/Switch"},
      {name:"Les instructions itératives: boucle for" , url: "Conditions-Boucles/Boucle-For"},
      {name:"Les instructions itératives: boucle while" , url: "Conditions-Boucles/Boucle-While"},
    ];
   }
}