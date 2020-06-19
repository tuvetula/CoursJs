import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, from, Observable } from "rxjs";
import { AppliMenuModel } from "../../models/Menus/appliMenu.model";
import { AngularService } from "./Angular/angular.service";
import { JavascriptService } from "./Javascript/javascript.service";
import { MyAccountService } from './MyAccount/my-account.service';
import { NodeService } from './Node/node.service';

@Injectable({
  providedIn: 'root'
})
export class AppliService {
  public appliMenu: AppliMenuModel[];
  public currentAppliMenuName: BehaviorSubject<string> = new BehaviorSubject(null);
  public appliMenuSelectSection: Subject<AppliMenuModel> = new Subject();
  public title: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private angularService: AngularService,
    private javascriptService: JavascriptService,
    private nodeService: NodeService,
    private myAccountService: MyAccountService
  ) {
    this.appliMenu = [
      { name: "Accueil",
        url: "/",
        classToAdd: "Accueil",
        iconeUrl: "../../../../../assets/Pictures/Logo/home48.png",
        chaptersMenu: null,
        darkTheme: false,
        isOnNavbarLg: false,
        isOnNavbarMobile: true,
        showNonConnectedUser: true,
        availableForSearchBar: false
      },
      {
        name: "Javascript",
        url: "/Javascript",
        classToAdd: "Javascript",
        iconeUrl: "../../../../../assets/Pictures/Logo/JavascriptLogo.png",
        chaptersMenu: this.javascriptService.javascriptMenu,
        darkTheme: false,
        isOnNavbarLg: true,
        isOnNavbarMobile: true,
        showNonConnectedUser: false,
        availableForSearchBar: true,
        keywords: ['Javascript','js']
      },
      {
        name: "Node",
        url: "/Node",
        classToAdd: "Node",
        iconeUrl:"../../../../../assets/Pictures/Logo/NodePng.png",
        chaptersMenu: this.nodeService.nodeMenu,
        darkTheme: true,
        isOnNavbarLg: true,
        isOnNavbarMobile: true,
        showNonConnectedUser: false,
        availableForSearchBar: true,
        keywords: ['Node']
      }, 
      {
        name: "Angular",
        url: "/Angular",
        classToAdd: "Angular",
        iconeUrl: "../../../../../assets/Pictures/Logo/AngularPng.png",
        chaptersMenu: this.angularService.angularMenu,
        darkTheme: true,
        isOnNavbarLg: true,
        isOnNavbarMobile: true,
        showNonConnectedUser: false,
        availableForSearchBar: true,
        keywords: ['Angular']
      },
      {
        name: "Mon compte",
        url: "/MonCompte",
        classToAdd: "MonCompte",
        iconeUrl: "../../../../../assets/Pictures/Logo/AccountBadge48.png",
        chaptersMenu: this.myAccountService.myAccountChaptersMenu,
        darkTheme: false,
        isOnNavbarLg: false,
        isOnNavbarMobile: false,
        showNonConnectedUser: false,
        availableForSearchBar: true,
        keywords: ['compte']
      }
    ];
    this.currentAppliMenuName.subscribe((currentAppliMenuName: string) => {
      this.appliMenuSelectSection.next(this.getAppliMenuSelected(currentAppliMenuName));
    });
  }

  //Utile pour searchBarComponent
  public getAppliMenu(): Observable<AppliMenuModel>{
    return from(this.appliMenu);
  }
  private getAppliMenuSelected(name: string): AppliMenuModel {
    return this.appliMenu.find(
      element => element.name === name
    )
  }
}
