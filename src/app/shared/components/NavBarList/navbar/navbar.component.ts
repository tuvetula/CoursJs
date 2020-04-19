import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/appli.service";
import { SectionMenuModel } from "src/app/shared/models/sectionMenu.model";
import { MenuModel } from "src/app/shared/models/menu.model";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public appliMenu: SectionMenuModel[];
  public currentSectionMenuSelectedSubscription: Subscription;
  public selectMenu: string;

  public isNavbarThemeIsDark: boolean;
  public isSelectSectionMenuDisplay: boolean = false;
  public isMenuCollapsed: boolean = true;
  public menuToShowInCollapse: MenuModel[];

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService
  ) {}

  ngOnInit(): void {
    //On configure le menu à afficher dans le selectSectionMenu (version Mobile) ou sur la navbar (version lg)
    this.appliMenu = this.appliService.appliMenu;
    //On souscrit pour recevoir l'objet du sectionMenu selectionné
    this.currentSectionMenuSelectedSubscription = this.appliService.appliMenuSelectSection.subscribe(
      (sectionMenu: SectionMenuModel) => {
        this.selectMenu = sectionMenu.name;
        this.isNavbarThemeIsDark = sectionMenu.darkTheme;
        this.menuToShowInCollapse = sectionMenu.menu;
      }
    );
    
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
    this.isSelectSectionMenuDisplay = false;
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
  // public onNavbarMenuItemClick(name: string): void {
  //   this.appliService.title.next(name);
  //   this.listMenuLeftService.listMenu.next([]);
  // }
  //Clique sur un élément de la navbar Mobile
  public onNavbarMenuCollapseItemClick(name: string, url: string): void {
    this.isMenuCollapsed = true;
  }

  ngOnDestroy(): void {
    this.currentSectionMenuSelectedSubscription.unsubscribe();
  }
}
