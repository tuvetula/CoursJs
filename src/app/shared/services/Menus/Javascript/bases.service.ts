import { Injectable } from '@angular/core';

@Injectable()
export class BasesService {
  public basesMenu: {name:string , url: string}[];

  constructor() {
    this.basesMenu = [
      {name:"La Variable var" , url: "Bases/Variable-var"},
      {name:"Les Variables let et const" , url: "Bases/Variables-let-const"},
      {name:"Hoisting" , url: "Bases/Hoisting"},
      {name:"Les types" , url: "Bases/Types"},
      {name:"Les opérateurs et les notions de précédence et d'associativité" , url: "Bases/Operateurs"},
      {name:"Les conversions" , url: "Bases/Conversions"},
      {name:"Approfondissement des opérateurs de comparaisons et logiques" , url: "Bases/Approfondissement-operateurs"},
      {name:"Les notions de valeur et de référence" , url: "Bases/Valeurs-references"},

    ];
   }
}