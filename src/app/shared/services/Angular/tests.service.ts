import { Injectable } from '@angular/core';

@Injectable()
export class TestsService {
  public testsMenu: {name:string , url: string}[];

  constructor() {
    this.testsMenu = [
      {name: "Introduction test" , url: "Tests/Introduction"},
      {name: "Setup" , url: "Tests/Setup"},
      {name: "Environnement pour tester les composants" , url: "Tests/Environnement-tester-composants"},
      {name: "Tester ses composants" , url: "Tests/Tester-composants"},
      {name: "Détection des changements et matchers" , url: "Tests/Detection-changements-matchers"},
      {name: "Tester des composants avec des dépendances" , url: "Tests/Tester-composants-dependances"},
      {name: "Les tests isolés et tests d'un pipe" , url: "Tests/Tests-isoles-pipes"},
      {name: "Exemple" , url: "Tests/Exemple"},
    ]
   }
}
