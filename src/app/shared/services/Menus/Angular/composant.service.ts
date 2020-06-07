import { Injectable } from "@angular/core";
import { MenuModel } from '../../../models/menu.model';

@Injectable()
export class ComposantService {
  public composantMenu: MenuModel[] = [
    { name: "String Interpolation", url: "/Angular/Composants/Interpolation" },
    { name: "Property-binding", url: "/Angular/Composants/Property-binding" },
    { name: "Event-binding", url: "/Angular/Composants/Event-binding" },
    { name: "Double data-binding", url: "/Angular/Composants/Double-data-binding" },
    { name: "Property Input", url: "/Angular/Composants/Property-input" },
    { name: "Property Output", url: "/Angular/Composants/Property-output" },
    { name: "L'encapsulation", url: "/Angular/Composants/Encapsulation" },
    { name: "Variable locale", url: "/Angular/Composants/Variable-locale" },
    { name: "ViewChild", url: "/Angular/Composants/ViewChild" },
    { name: "NgContent", url: "/Angular/Composants/NgContent" },
    { name: "ContentChild", url: "/Angular/Composants/ContentChild" },
    { name: "Cycle de vie des composants", url: "/Angular/Composants/LifeCycle-of-components" },
  ];

  constructor() {}
}
