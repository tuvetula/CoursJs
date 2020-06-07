import { Injectable } from "@angular/core";

@Injectable()
export class ObservableService {
  public observableMenu: { name: string; url: string }[];

  constructor() {
    this.observableMenu = [
      { name: "Introduction", url: "/Angular/Observables/Introduction" },
      { name: "Création d'un observable", url: "/Angular/Observables/Creation-observable" },
      { name: "Introduction aux subjects", url: "/Angular/Observables/Introduction-subjects" },
      { name: "Utilisation des subjects", url: "/Angular/Observables/Utilisation-subjects" },
      { name: "Les opérateurs et les pipes RxJs", url: "/Angular/Observables/Operateurs-pipes" },
      { name: "Les opérateurs de création" , url: "/Angular/Observables/Operateurs-creation"},
      { name: "Les opérateurs pipeables, de transformation et utilitaires" , url: "/Angular/Observables/Operateurs-pipeables"},
      { name: "Création d'une fonction de génération de flux" , url: "/Angular/Observables/Creation-fonction-generation-flux"},
      { name: "Les opérateurs de combinaison" , url: "/Angular/Observables/Operateurs-combinaison"},
      { name: "Les opérateurs de filtre" , url: "/Angular/Observables/Operateurs-filtre"},
    ];
  }
}
