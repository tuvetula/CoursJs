import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { SectionMenuModel } from "../models/sectionMenu.model";
import { AngularService } from "./Angular/angular.service";
import { JavascriptService } from "./Javascript/javascript.service";

@Injectable()
export class AppliService {
  public appliMenu: SectionMenuModel[];
  public currentSection: BehaviorSubject<string> = new BehaviorSubject(null);
  public appliMenuSelectSection: Subject<SectionMenuModel> = new Subject();
  public title: BehaviorSubject<string> = new BehaviorSubject(null);
  

  constructor(
    private angularService: AngularService,
    private javascriptService: JavascriptService
  ) {
    this.appliMenu = [
      { name: "Accueil", url: "/", menu: null , darkTheme: false },
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
    this.currentSection.subscribe((currentSection) => {
        this.appliMenuSelectSection.next(this.getSectionMenu(currentSection));
      });
  }

  getSectionMenu(name: string): SectionMenuModel {
    let menu: SectionMenuModel;
    if(name){
      this.appliMenu.forEach((element) => {
        if (element.name === name) {
          menu = element;
        }
      });
    }
    return menu;
  }
}
