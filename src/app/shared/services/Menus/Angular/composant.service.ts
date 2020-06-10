import { Injectable } from "@angular/core";
import { LessonMenuModel } from '../../../models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ComposantService {
  public composantMenu: LessonMenuModel[];

  constructor() {
    this.composantMenu = [
      { name: "String Interpolation", url: "/Angular/Composants/Interpolation" , keywords:['string','interpolation'] },
      { name: "Property-binding", url: "/Angular/Composants/Property-binding" , keywords:['property','binding'] },
      { name: "Event-binding", url: "/Angular/Composants/Event-binding" , keywords:['event','binding'] },
      { name: "Double data-binding", url: "/Angular/Composants/Double-data-binding" , keywords:['double','data','binding'] },
      { name: "Property Input", url: "/Angular/Composants/Property-input" , keywords:['property','input'] },
      { name: "Property Output", url: "/Angular/Composants/Property-output" , keywords:['property','output'] },
      { name: "L'encapsulation", url: "/Angular/Composants/Encapsulation" , keywords:['encapsulation'] },
      { name: "Variable locale", url: "/Angular/Composants/Variable-locale" , keywords:['variable','locale'] },
      { name: "ViewChild", url: "/Angular/Composants/ViewChild" , keywords:['viewchild'] },
      { name: "NgContent", url: "/Angular/Composants/NgContent" , keywords:['ngcontent'] },
      { name: "ContentChild", url: "/Angular/Composants/ContentChild" , keywords:['contentchild'] },
      { name: "Cycle de vie des composants", url: "/Angular/Composants/LifeCycle-of-components" , keywords:['cycle','vie','components','composants'] },
    ];
  }
}
