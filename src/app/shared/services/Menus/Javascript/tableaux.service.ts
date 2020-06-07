import { Injectable } from "@angular/core";

@Injectable()
export class TableauxService {
  public tableauxMenu: { name: string; url: string }[];

  constructor() {
    this.tableauxMenu = [
      { name: "Introduction aux tableaux", url: "/Javascript/Tableaux/Introduction" },
      { name: "Accéder aux propriétés d'un tableau", url: "/Javascript/Tableaux/Acceder-proprietes" },
      { name: "Imbrication de tableaux", url: "/Javascript/Tableaux/Imbrication" },
      { name: "Décomposition de tableaux et opérateur rest", url: "/Javascript/Tableaux/Decomposition"},
      { name: "Ajouter des éléments à un tableau", url: "/Javascript/Tableaux/Ajouter-elements" },
      { name: "Supprimer des éléments à un tableau", url: "/Javascript/Tableaux/Supprimer-elements" },
      { name: "Trouver des éléments dans un tableau", url: "/Javascript/Tableaux/Trouver-elements" },
      { name: "Copier un tableau", url: "/Javascript/Tableaux/Copier" },
      { name: "Fusionner des tableaux", url: "/Javascript/Tableaux/Fusionner" },
      { name: "Trier un tableau", url: "/Javascript/Tableaux/Trier" },
      { name: "Itérer sur un tableau", url: "/Javascript/Tableaux/Iterer" },
      { name: "Introduction à la programmation fonctionnelle", url: "/Javascript/Tableaux/Introduction-programmation-fonctionnelle" },
      { name: "D'autres méthodes de programmation fonctionnelle", url: "/Javascript/Tableaux/Autres-methodes" },
    ];
  }
}
