import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class TableauxService {
  public tableauxMenu: LessonMenuModel[];

  constructor() {
    this.tableauxMenu = [
      { name: "Introduction aux tableaux", url: "/Javascript/Tableaux/Introduction" },
      { name: "Accéder aux propriétés d'un tableau", url: "/Javascript/Tableaux/Acceder-proprietes",keywords:['proprietes'] },
      { name: "Imbrication de tableaux", url: "/Javascript/Tableaux/Imbrication",keywords:['imbrication']},
      { name: "Décomposition de tableaux et opérateur rest", url: "/Javascript/Tableaux/Decomposition",keywords:['decomposition','rest']},
      { name: "Ajouter des éléments à un tableau", url: "/Javascript/Tableaux/Ajouter-elements",keywords:['push','unshift','spread','splice','ajouter'] },
      { name: "Supprimer des éléments à un tableau", url: "/Javascript/Tableaux/Supprimer-elements",keywords:['shift','pop','splice','rest','supprimer'] },
      { name: "Trouver des éléments dans un tableau", url: "/Javascript/Tableaux/Trouver-elements",keywords:['indexof','lastindexof','includes','find','findIndex','trouver'] },
      { name: "Copier un tableau", url: "/Javascript/Tableaux/Copier",keywords:['copier','slice'] },
      { name: "Fusionner des tableaux", url: "/Javascript/Tableaux/Fusionner",keywords:['fusionner','concat','spread'] },
      { name: "Trier un tableau", url: "/Javascript/Tableaux/Trier",keywords:['sort','localecompare','reverse','trier'] },
      { name: "Itérer sur un tableau", url: "/Javascript/Tableaux/Iterer",keywords:['for','foreach','for of'] },
      { name: "Introduction à la programmation fonctionnelle", url: "/Javascript/Tableaux/Introduction-programmation-fonctionnelle",keywords:['map','filter','programmation','fonctionnelle'] },
      { name: "D'autres méthodes de programmation fonctionnelle", url: "/Javascript/Tableaux/Autres-methodes",keywords:['reduce','reduceright','flat','flatmap','every','some','methodes'] },
    ];
  }
}
