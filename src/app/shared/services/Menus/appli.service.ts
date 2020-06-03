import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { AppliMenuModel } from "../../models/appliMenu.model";
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
    private javascriptService: JavascriptService,
  ) {
    this.appliMenu = [
      { name: "Accueil",
        url: "/",
        classToAdd: "Accueil",
        iconeUrl: "../../../../../assets/Pictures/Logo/home48.png",
        menu: null,
        darkTheme: false,
        isOnNavbarLg: false,
        isOnNavbarMobile: true,
        showNonConnectedUser: true },
      {
        name: "Angular",
        url: "Angular",
        classToAdd: "Angular",
        iconeUrl: "../../../../../assets/Pictures/Logo/AngularPng.png",
        menu: this.angularService.angularMenu,
        darkTheme: true,
        isOnNavbarLg: true,
        isOnNavbarMobile: true,
        showNonConnectedUser: false
      },
      {
        name: "Javascript",
        url: "Javascript",
        classToAdd: "Javascript",
        iconeUrl: "../../../../../assets/Pictures/Logo/JavascriptLogo.png",
        menu: this.javascriptService.javascriptMenu,
        darkTheme: false,
        isOnNavbarLg: true,
        isOnNavbarMobile: true,
        showNonConnectedUser: false
      },
      {
        name: "Mon compte",
        url: "MonCompte",
        classToAdd: "MonCompte",
        iconeUrl: "../../../../../assets/Pictures/Logo/AccountBadge48.png",
        menu: null,
        darkTheme: false,
        isOnNavbarLg: false,
        isOnNavbarMobile: false,
        showNonConnectedUser: false
      }
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
