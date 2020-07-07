import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  public observableMenu: LessonMenuModel[];

  constructor() {
    this.observableMenu = [
      { name: "Introduction", url: "/Angular/Observables/Introduction" },
      { name: "Création d'un observable", url: "/Angular/Observables/Creation-observable" , keywords:['creation'] },
      { name: "Introduction aux subjects", url: "/Angular/Observables/Introduction-subjects" , keywords:['subjects','observer']},
      { name: "Utilisation des subjects", url: "/Angular/Observables/Utilisation-subjects" , keywords:['utilisation','subjects','behavioursubject','replaysubject','asyncsubject'] },
      { name: "Les opérateurs et les pipes RxJs", url: "/Angular/Observables/Operateurs-pipes" , keywords:['operateurs','operators','pipes'] },
      { name: "Les opérateurs de création" , url: "/Angular/Observables/Operateurs-creation" , keywords:['creation','operateurs','operators','of','from','interval','timer']},
      { name: "Les opérateurs pipeables, de transformation et utilitaires" , url: "/Angular/Observables/Operateurs-pipeables", keywords:['pipeables','operateurs','operators','map','pluck','switchmap','mergemap','flatmap','concatmap','tap','delay']},
      { name: "Création d'une fonction de génération de flux" , url: "/Angular/Observables/Creation-fonction-generation-flux",keywords:['creation','flux','generation']},
      { name: "Les opérateurs de combinaison" , url: "/Angular/Observables/Operateurs-combinaison",keywords:['combinaison','operateurs','operators','filter','mergeall','concatall','merge','combinelatest','withlatestfrom','forkjoin']},
      { name: "Les opérateurs de filtre" , url: "/Angular/Observables/Operateurs-filtre",keywords:['operateurs','operators','take','skip','filter','first','debouncetime','takeuntil']},
      { name: "Autres", url: "/Angular/Observables/Autres" , keywords:['untilDestroyed','fromEvent']}
    ];
  }
}
