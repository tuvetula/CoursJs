import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularService } from "src/app/shared/services/Angular/angular.service";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/appli.service";
import { JavascriptService } from "src/app/shared/services/Javascript/javascript.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public appliMenu: { name: string; url: string }[];
  public currentSectionSubscription: Subscription;
  public selectMenu: string;
  public isNavbarThemeIsDark: boolean;
  public isSelectSectionMenuDisplay: boolean = false;
  public isMenuCollapsed: boolean = true;
  public menuToShowInCollapse: { name: string; url: string }[];

  constructor(
    private appliService: AppliService,
    private angularService: AngularService,
    private javscriptService: JavascriptService,
    private listMenuLeftService: ListMenuLeftService,
  ) {}

  ngOnInit(): void {
    //On souscrit à la route courante pour savoir dans quelle section on se trouve.
    this.currentSectionSubscription = this.appliService.currentSection.subscribe(
      (section) => {
        this.selectMenu = section;
        //On indique si le theme de la navbar est dark ou light
        this.configureIsNavbarThemeIsdark(this.selectMenu);
        //On configure le menu à afficher dans le collapseMenu
        this.configureMenuToShowInCollapse(this.selectMenu);
      }
    );
    //On configure le menu à afficher dans le selectSectionMenu (version Mobile) ou sur la navbar (version lg)
    this.appliMenu = this.appliService.appliMenu;
  }

  //Clique sur le bouton menu de choix de la section (Version mobile)(bouton en haut à gauche)
  public onSelectSectionMenuClick(): void {
    this.isSelectSectionMenuDisplay = !this.isSelectSectionMenuDisplay;
    if (!this.isMenuCollapsed) {
      this.isMenuCollapsed = true;
    }
  }
  //Clique sur un choix de section (Version Mobile)
  public onSelectSectionMenuItemClick(name: string): void {
    this.configureIsNavbarThemeIsdark(name);
    this.configureMenuToShowInCollapse(name);
    this.isSelectSectionMenuDisplay = false;
    this.appliService.title.next(name);
    this.listMenuLeftService.listMenu.next([]);
  }

  //Clique sur le bouton toggle de la navbar mobile
  public onClickTogglerButton(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (this.isSelectSectionMenuDisplay) {
      this.isSelectSectionMenuDisplay = false;
    }
  }
  //Clique sur un élément de la navbar
  public onNavbarMenuItemClick(name: string): void {
    this.appliService.title.next(name);
    this.listMenuLeftService.listMenu.next([]);
  }
  //Clique sur un élément de la navbar Mobile
  public onNavbarMenuCollapseItemClick(name: string, url: string): void {
    this.isMenuCollapsed = true;
  }

  private configureMenuToShowInCollapse(name: string): void {
    if (name === "Angular") {
      this.menuToShowInCollapse = this.angularService.angularMenu;
    } else if (name === "Javascript") {
      this.menuToShowInCollapse = this.javscriptService.javascriptMenu;
    } else {
      this.menuToShowInCollapse = [];
    }
  }

  private configureIsNavbarThemeIsdark(nameSelectMenu): void {
    let menuWithDarkTheme: string[] = ["Angular"];
    if (menuWithDarkTheme.includes(nameSelectMenu)) {
      this.isNavbarThemeIsDark = true;
    } else {
      this.isNavbarThemeIsDark = false;
    }
  }
  ngOnDestroy():void{
    this.currentSectionSubscription.unsubscribe();
  }
}
