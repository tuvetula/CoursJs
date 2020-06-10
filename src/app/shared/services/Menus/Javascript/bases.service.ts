import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class BasesService {
  public basesMenu: LessonMenuModel[];

  constructor() {
    this.basesMenu = [
      {name:"La Variable var" , url: "/Javascript/Bases/Variable-var",keywords:['variables','var']},
      {name:"Les Variables let et const" , url: "/Javascript/Bases/Variables-let-const",keywords:['variables','let','const']},
      {name:"Hoisting" , url: "/Javascript/Bases/Hoisting",keywords:['hoisting']},
      {name:"Les types" , url: "/Javascript/Bases/Types",keywords:['types']},
      {name:"Les opérateurs et les notions de précédence et d'associativité" , url: "/Javascript/Bases/Operateurs",keywords:['précédences','associativité']},
      {name:"Les conversions" , url: "/Javascript/Bases/Conversions",keywords:['conversions']},
      {name:"Approfondissement des opérateurs de comparaisons et logiques" , url: "/Javascript/Bases/Approfondissement-operateurs",keywords:['opérateurs','comparaisons','logiques']},
      {name:"Les notions de valeur et de référence" , url: "/Javascript/Bases/Valeurs-references",keywords:['notions','valeurs','references']},
    ];
   }
}