import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  public classesMenu: LessonMenuModel[];

  constructor() {
    this.classesMenu = [
      { name: "Déclaration d'une classe", url: "/Javascript/Classes/Declaration",keywords:['declarations']},
      { name: "L'héritage avec les classes", url: "/Javascript/Classes/Heritage",keywords:['heritage'] },
      { name: "Les méthodes statiques", url: "/Javascript/Classes/Methodes-statiques",keywords:['statiques','static'] },
      { name: "Les propriétés privées", url: "/Javascript/Classes/Proprietes-privees",keywords:['privees','private'] },
      {
        name: "Etendre les objets natifs avec extends",
        url: "/Javascript/Classes/Etendre-objets-natifs",keywords:['objets','natifs','etendre']
      },
      { name: "L'opérateur instanceof", url: "/Javascript/Classes/Instanceof",keywords:['instanceof'] },
      { name: "Les mixins", url: "/Javascript/Classes/Mixins",keywords:['mixins'] },
    ];
  }
}
