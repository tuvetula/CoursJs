import { Injectable } from '@angular/core';

@Injectable()
export class BasesService {
  public basesMenu: {name:string , url: string}[];

  constructor() {
    this.basesMenu = [
      {name:"La Variable var" , url: "/Javascript/Bases/Variable-var"},
      {name:"Les Variables let et const" , url: "/Javascript/Bases/Variables-let-const"},
      {name:"Hoisting" , url: "/Javascript/Bases/Hoisting"},
      {name:"Les types" , url: "/Javascript/Bases/Types"},
      {name:"Les opérateurs et les notions de précédence et d'associativité" , url: "/Javascript/Bases/Operateurs"},
      {name:"Les conversions" , url: "/Javascript/Bases/Conversions"},
      {name:"Approfondissement des opérateurs de comparaisons et logiques" , url: "/Javascript/Bases/Approfondissement-operateurs"},
      {name:"Les notions de valeur et de référence" , url: "/Javascript/Bases/Valeurs-references"},
    ];
   }
}