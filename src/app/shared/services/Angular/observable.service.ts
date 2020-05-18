import { Injectable } from "@angular/core";

@Injectable()
export class ObservableService {
  public observableMenu: { name: string; url: string }[];

  constructor() {
    this.observableMenu = [
      { name: "Introduction", url: "Observables/Introduction" },
      { name: "Création d'un observable", url: "Observables/Creation-observable" },
      { name: "Introduction aux subjects", url: "Observables/Introduction-subjects" },
      { name: "Utilisation des subjects", url: "Observables/Utilisation-subjects" },
      { name: "Les opérateurs et les pipes RxJs", url: "Observables/Operateurs-pipes" },
      { name: "Les opérateurs de création" , url: "Observables/Operateurs-creation"},
      { name: "Les opérateurs pipeables, de transformation et utilitaires" , url: "Observables/Operateurs-pipeables"},
      { name: "Création d'une fonction de génération de flux" , url: "Observables/Creation-fonction-generation-flux"},
      { name: "Les opérateurs de combinaison" , url: "Observables/Operateurs-combinaison"},
      { name: "Les opérateurs de filtre" , url: "Observables/Operateurs-filtre"},
    ];
  }
}
