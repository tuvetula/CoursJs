import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ObjetsService {
  public objetsMenu: LessonMenuModel[];

  constructor() {
    this.objetsMenu = [
      { name: "Introduction aux objets", url: "/Javascript/Objets/Introduction" },
      { name: "Les propriétes des objets", url: "/Javascript/Objets/Proprietes",keywords:['proprietes'] },
      { name: "Raccourcis syntaxiques", url: "/Javascript/Objets/Raccourcis-syntaxiques",keywords:['raccourcis','syntaxiques'] },
      { name: "La décomposition d'objet", url: "/Javascript/Objets/Decomposition",keywords:['decomposition','rest'] },
      {
        name: "Tester l'existence et la valeur d'une propriété",
        url: "/Javascript/Objets/Test-existence-valeur",keywords:['in','hasownproperty']
      },
      {
        name: "Supprimer ou écarter des propriétés",
        url: "/Javascript/Objets/Supprimer-proprietes",keywords:['delete','rest']
      },
      { name: "Fusionner des objets", url: "/Javascript/Objets/Fusionner",keywords:['assign','spread'] },
      { name: "Comparer des objets", url: "/Javascript/Objets/Comparer",keywords:['comparer'] },
      { name: "Itérer sur des objets", url: "/Javascript/Objets/Iterer",keywords:['iterer','for in','values','keys','entries'] },
      { name: "Le format JSON", url: "/Javascript/Objets/Format-json",keywords:['json','parse','stringify']},
      { name: "Copier un objet", url: "/Javascript/Objets/Copier",keywords:['assign','stringify','parse'] },
      { name: "Objectifs et description des propriétés d'un objet", url: "/Javascript/Objets/Objectifs-description-proprietes" },
      { name: "Les accesseurs et les mutateurs", url: "/Javascript/Objets/Accesseurs-mutateurs",keywords:['defineproperty','defineproperties','getownpropertydescriptors','accesseurs','mutateurs','flags'] },
      { name: "La Poo et les constructeurs", url: "/Javascript/Objets/Poo-constructeurs",keywords:['poo','constructor','constructeurs'] },
      { name: "Introduction aux prototypes", url: "/Javascript/Objets/Introduction-prototypes",keywords:['prototypes']},
      { name: "Le pattern constructeur et la propriété prototype", url: "/Javascript/Objets/Pattern-constructeur",keywords:['pattern','constructor','prototype','propriete']},
      { name: "Les prototypes natifs", url: "/Javascript/Objets/Prototypes-natifs",keywords:['prototypes','natifs']},
      { name: "Utilisation des prototypes", url: "/Javascript/Objets/Utilisation-prototypes",keywords:['prototypes','utilisation']},
      { name: "Api d'Object", url: "/Javascript/Objets/Api-object",keywords:['api','object'] },

    ];
  }
}
