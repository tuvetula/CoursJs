import { Injectable } from "@angular/core";

@Injectable()
export class ClassesService {
  public classesMenu: { name: string; url: string }[];

  constructor() {
    this.classesMenu = [
      { name: "Déclaration d'une classe", url: "Classes/Declaration" },
      { name: "L'héritage avec les classes", url: "Classes/Heritage" },
      { name: "Les méthodes statiques", url: "Classes/Methodes-statiques" },
      { name: "Les propriétés privées", url: "Classes/Proprietes-privees" },
      {
        name: "Etendre les objets natifs avec extends",
        url: "Classes/Etendre-objets-natifs",
      },
      { name: "L'opérateur instanceof", url: "Classes/Instanceof" },
      { name: "Les mixins", url: "Classes/Mixins" },
    ];
  }
}
