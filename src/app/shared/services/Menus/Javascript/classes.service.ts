import { Injectable } from "@angular/core";

@Injectable()
export class ClassesService {
  public classesMenu: { name: string; url: string }[];

  constructor() {
    this.classesMenu = [
      { name: "Déclaration d'une classe", url: "/Javascript/Classes/Declaration" },
      { name: "L'héritage avec les classes", url: "/Javascript/Classes/Heritage" },
      { name: "Les méthodes statiques", url: "/Javascript/Classes/Methodes-statiques" },
      { name: "Les propriétés privées", url: "/Javascript/Classes/Proprietes-privees" },
      {
        name: "Etendre les objets natifs avec extends",
        url: "/Javascript/Classes/Etendre-objets-natifs",
      },
      { name: "L'opérateur instanceof", url: "/Javascript/Classes/Instanceof" },
      { name: "Les mixins", url: "/Javascript/Classes/Mixins" },
    ];
  }
}
