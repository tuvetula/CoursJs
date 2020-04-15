import { Component, OnInit } from "@angular/core";
import { AngularService } from "src/app/shared/services/Angular/angular.service";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { RouteService } from "src/app/shared/services/route.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/appli.service";
import { JavascriptService } from "src/app/shared/services/Javascript/javascript.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public appliMenu: { name: string; url: string }[];
  public routeUrlSubscription: Subscription;

  public selectMenu: string;
  public isMenuCollapsed: boolean = true;

  public nameMenuCollapseOpen: string;
  public isSousMenuCollapsed: boolean = true;
  public menuToShowInCollapse: { name: string; url: string }[];

  public sizescreen: number;

  constructor(
    private appliService: AppliService,
    private angularService: AngularService,
    private javscriptService: JavascriptService,
    private listMenuLeftService: ListMenuLeftService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    //On souscrit à la route courante pour savoir dans quel menu on se trouve.
    this.routeUrlSubscription = this.routeService.currentRoute.subscribe(
      (route) => {
        route
          ? (this.selectMenu = route.split("/")[1])
          : (this.selectMenu = route);
      }
    );
    this.appliMenu = this.appliService.appliMenu;
  }
  //Récupérer la taille de l'ecran
  test() {
    if (window.screen.width < 993) {
      return true;
    } else {
      return false;
    }
  }
  //Clique sur le titre h4 de la navbar mobile
  public onh4Title(): void {
    this.onNavbarMenuItemClick(this.selectMenu);
  }

  //Clique sur le bouton toggle de la navbar mobile
  public onClickTogglerButton(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (!this.isSousMenuCollapsed) {
      this.isSousMenuCollapsed = true;
    }
  }
  //Clique sur un élément de la navbar
  public onNavbarMenuItemClick(name: string): void {
    if (name === "Angular") {
      this.angularService.title.next(name);
    }
    this.listMenuLeftService.listMenu.next([]);
  }
  //Clique sur un élément de la navbar Mobile
  public onNavbarMenuItemCollapseClick(name: string): void {
    if (name === this.nameMenuCollapseOpen) {
      this.isSousMenuCollapsed = !this.isSousMenuCollapsed;
    } else {
      this.nameMenuCollapseOpen = name;
      if (name === "Angular") {
        this.menuToShowInCollapse = this.angularService.angularMenu;
      } else if (name === "Javascript") {
        this.menuToShowInCollapse = this.javscriptService.javascriptMenu;
      } else {
        this.menuToShowInCollapse = [];
      }
      if (this.isSousMenuCollapsed) {
        this.isSousMenuCollapsed = false;
      }
    }
  }
  //Clique sur un élément d'un sous-menu
  public onSousMenuCollapseClick(): void {
    this.isSousMenuCollapsed = true;
    this.isMenuCollapsed = true;
  }
}
