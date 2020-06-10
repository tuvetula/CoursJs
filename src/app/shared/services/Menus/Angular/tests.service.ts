import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  public testsMenu: LessonMenuModel[];

  constructor() {
    this.testsMenu = [
      {name: "Introduction test" , url: "/Angular/Tests/Introduction"},
      {name: "Setup" , url: "/Angular/Tests/Setup",keywords:['setup']},
      {name: "Environnement pour tester les composants" , url: "/Angular/Tests/Environnement-tester-composants",keywords:['composants','tester','environnement']},
      {name: "Tester ses composants" , url: "/Angular/Tests/Tester-composants"},
      {name: "Détection des changements et matchers" , url: "/Angular/Tests/Detection-changements-matchers",keywords:['matchers','detection','changements']},
      {name: "Tester des composants avec des dépendances" , url: "/Angular/Tests/Tester-composants-dependances",keywords:['dependances','composants']},
      {name: "Les tests isolés et tests d'un pipe" , url: "/Angular/Tests/Tests-isoles-pipes",keywords:['isoles','pipes']},
    ]
   }
}
