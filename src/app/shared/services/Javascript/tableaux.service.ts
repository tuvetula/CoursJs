import { Injectable } from "@angular/core";

@Injectable()
export class TableauxService {
  public tableauxMenu: { name: string; url: string }[];

  constructor() {
    this.tableauxMenu = [
      { name: "Introduction aux tableaux", url: "Tableaux/Introduction" },
      { name: "Accéder aux propriétés d'un tableau", url: "Tableaux/Acceder-proprietes" },
      { name: "Imbrication de tableaux", url: "Tableaux/Imbrication" },
      { name: "Décomposition de tableaux et opérateur rest", url: "Tableaux/Decomposition"},
      { name: "Ajouter des éléments à un tableau", url: "Tableaux/Ajouter-elements" },
      { name: "Supprimer des éléments à un tableau", url: "Tableaux/Supprimer-elements" },
      { name: "Trouver des éléments dans un tableau", url: "Tableaux/Trouver-elements" },
      { name: "Copier un tableau", url: "Tableaux/Copier" },
      { name: "Fusionner des tableaux", url: "Tableaux/Fusionner" },
      { name: "Trier un tableau", url: "Tableaux/Trier" },
      { name: "Itérer sur un tableau", url: "Tableaux/Iterer" },
      { name: "Introduction à la programmation fonctionnelle", url: "Tableaux/Introduction-programmation-fonctionnelle" },
      { name: "D'autres méthodes de programmation fonctionnelle", url: "Tableaux/Autres-methodes" },
    ];
  }
}
