import { Injectable } from "@angular/core";

@Injectable()
export class ObjetsService {
  public objetsMenu: { name: string; url: string }[];

  constructor() {
    this.objetsMenu = [
      { name: "Introduction aux objets", url: "Objets/Introduction" },
      { name: "Les propriétes des objets", url: "Objets/Proprietes" },
      { name: "Raccourcis syntaxiques", url: "Objets/Raccourcis-syntaxiques" },
      { name: "La décomposition d'objet", url: "Objets/Decomposition" },
      {
        name: "Tester l'existence et la valeur d'une propriété",
        url: "Objets/Test-existence-valeur",
      },
      {
        name: "Supprimer ou écarter des propriétés",
        url: "Objets/Supprimer-proprietes",
      },
      { name: "Fusionner des objets", url: "Objets/Fusionner" },
      { name: "Comparer des objets", url: "Objets/Comparer" },
      { name: "Itérer sur des objets", url: "Objets/Iterer" },
      { name: "Le format JSON", url: "Objets/Format-json" },
      { name: "Copier un objet", url: "Objets/Copier" },
      { name: "Objectifs et description des propriétés d'un objet", url: "Objets/Objectifs-description-proprietes" },
      { name: "Les accesseurs et les mutateurs", url: "Objets/Accesseurs-mutateurs" },
      { name: "La Poo et les constructeurs", url: "Objets/Poo-constructeurs" },
      { name: "Introduction aux prototypes", url: "Objets/Introduction-prototypes" },
      { name: "Le pattern constructeur et la propriété prototype", url: "Objets/Pattern-constructeur" },
      { name: "Les prototypes natifs", url: "Objets/Prototypes-natifs" },
      { name: "Utilisation des prototypes", url: "Objets/Utilisation-prototypes" },
      { name: "Api d'Object", url: "Objets/Api-object" },

    ];
  }
}
