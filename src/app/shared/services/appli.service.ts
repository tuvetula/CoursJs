import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { AppliMenuModel } from "../models/appliMenu.model";
import { AngularService } from "./Angular/angular.service";
import { JavascriptService } from "./Javascript/javascript.service";

@Injectable()
export class AppliService {
  public appliMenu: AppliMenuModel[];
  public currentAppliMenu: BehaviorSubject<string> = new BehaviorSubject(null);
  public appliMenuSelectSection: Subject<AppliMenuModel> = new Subject();
  public title: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private angularService: AngularService,
    private javascriptService: JavascriptService
  ) {
    this.appliMenu = [
      { name: "Accueil", url: "/", menu: null, darkTheme: false },
      {
        name: "Angular",
        url: "Angular",
        menu: this.angularService.angularMenu,
        darkTheme: true,
      },
      {
        name: "Javascript",
        url: "Javascript",
        menu: this.javascriptService.javascriptMenu,
        darkTheme: false,
      },
    ];
    this.currentAppliMenu.subscribe((currentAppliMenu) => {
      this.appliMenuSelectSection.next(this.getAppliMenu(currentAppliMenu));
    });
  }

  getAppliMenu(name: string): AppliMenuModel {
    let menu: AppliMenuModel;
    if (name) {
      this.appliMenu.forEach((element) => {
        if (element.name === name) {
          menu = element;
        }
      });
    }
    return menu;
  }
}
