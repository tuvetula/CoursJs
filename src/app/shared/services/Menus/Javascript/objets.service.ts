import { Injectable } from "@angular/core";

@Injectable()
export class ObjetsService {
  public objetsMenu: { name: string; url: string }[];

  constructor() {
    this.objetsMenu = [
      { name: "Introduction aux objets", url: "/Javascript/Objets/Introduction" },
      { name: "Les propriétes des objets", url: "/Javascript/Objets/Proprietes" },
      { name: "Raccourcis syntaxiques", url: "/Javascript/Objets/Raccourcis-syntaxiques" },
      { name: "La décomposition d'objet", url: "/Javascript/Objets/Decomposition" },
      {
        name: "Tester l'existence et la valeur d'une propriété",
        url: "/Javascript/Objets/Test-existence-valeur",
      },
      {
        name: "Supprimer ou écarter des propriétés",
        url: "/Javascript/Objets/Supprimer-proprietes",
      },
      { name: "Fusionner des objets", url: "/Javascript/Objets/Fusionner" },
      { name: "Comparer des objets", url: "/Javascript/Objets/Comparer" },
      { name: "Itérer sur des objets", url: "/Javascript/Objets/Iterer" },
      { name: "Le format JSON", url: "/Javascript/Objets/Format-json" },
      { name: "Copier un objet", url: "/Javascript/Objets/Copier" },
      { name: "Objectifs et description des propriétés d'un objet", url: "/Javascript/Objets/Objectifs-description-proprietes" },
      { name: "Les accesseurs et les mutateurs", url: "/Javascript/Objets/Accesseurs-mutateurs" },
      { name: "La Poo et les constructeurs", url: "/Javascript/Objets/Poo-constructeurs" },
      { name: "Introduction aux prototypes", url: "/Javascript/Objets/Introduction-prototypes" },
      { name: "Le pattern constructeur et la propriété prototype", url: "/Javascript/Objets/Pattern-constructeur" },
      { name: "Les prototypes natifs", url: "/Javascript/Objets/Prototypes-natifs" },
      { name: "Utilisation des prototypes", url: "/Javascript/Objets/Utilisation-prototypes" },
      { name: "Api d'Object", url: "/Javascript/Objets/Api-object" },

    ];
  }
}
