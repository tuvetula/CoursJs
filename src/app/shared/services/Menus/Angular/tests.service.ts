import { Injectable } from '@angular/core';

@Injectable()
export class TestsService {
  public testsMenu: {name:string , url: string}[];

  constructor() {
    this.testsMenu = [
      {name: "Introduction test" , url: "/Angular/Tests/Introduction"},
      {name: "Setup" , url: "/Angular/Tests/Setup"},
      {name: "Environnement pour tester les composants" , url: "/Angular/Tests/Environnement-tester-composants"},
      {name: "Tester ses composants" , url: "/Angular/Tests/Tester-composants"},
      {name: "Détection des changements et matchers" , url: "/Angular/Tests/Detection-changements-matchers"},
      {name: "Tester des composants avec des dépendances" , url: "/Angular/Tests/Tester-composants-dependances"},
      {name: "Les tests isolés et tests d'un pipe" , url: "/Angular/Tests/Tests-isoles-pipes"},
    ]
   }
}
