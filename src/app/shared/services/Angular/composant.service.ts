import { Injectable } from "@angular/core";
import { MenuModel } from '../../models/menu.model';

@Injectable()
export class ComposantService {
  public composantMenu: MenuModel[] = [
    { name: "String Interpolation", url: "Composants/Interpolation" },
    { name: "Property-binding", url: "Composants/Property-binding" },
    { name: "Event-binding", url: "Composants/Event-binding" },
    { name: "Double data-binding", url: "Composants/Double-data-binding" },
    { name: "Property Input", url: "Composants/Property-input" },
    { name: "Property Output", url: "Composants/Property-output" },
    { name: "L'encapsulation", url: "Composants/Encapsulation" },
    { name: "Variable locale", url: "Composants/Variable-locale" },
    { name: "ViewChild", url: "Composants/ViewChild" },
    { name: "NgContent", url: "Composants/NgContent" },
    { name: "ContentChild", url: "Composants/ContentChild" },
    { name: "Cycle de vie des composants", url: "Composants/LifeCycle-of-components" },
  ];

  constructor() {}
}
