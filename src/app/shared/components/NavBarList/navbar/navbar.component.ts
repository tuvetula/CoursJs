import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/appli.service";
import { AppliMenuModel } from "src/app/shared/models/appliMenu.model";
import { MenuModel } from "src/app/shared/models/menu.model";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("MenuDisplay", [
      transition(":enter", [style({ opacity: 0 }), animate("500ms ease-out")]),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isNavbarThemeIsDark: boolean;

  public appliMenu: AppliMenuModel[];
  public isAppliMenuDisplay: boolean = false;
  private currentAppliMenuSelectedSubscription: Subscription;
  public appliMenuItemSelected: string;

  public sectionMenu: MenuModel[];
  public isSectionMenuDisplay: boolean = false;
  private titlePageSubscription: Subscription;
  public sectionMenuItemSelected: string = "";

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService
  ) {}

  ngOnInit(): void {
    //On configure le menu à afficher dans le AppliMenu (version Mobile) ou sur la navbar (version lg)
    this.appliMenu = this.appliService.appliMenu;
    //On souscrit pour recevoir le appliMenu selectionné
    this.currentAppliMenuSelectedSubscription = this.appliService.appliMenuSelectSection.subscribe(
      (appliMenu: AppliMenuModel) => {
        this.appliMenuItemSelected = appliMenu.name;
        this.isNavbarThemeIsDark = appliMenu.darkTheme;
        this.sectionMenu = appliMenu.menu;
      }
    );
    this.titlePageSubscription = this.appliService.title.subscribe((title) => {
      if (title !== this.appliMenuItemSelected) {
        this.sectionMenuItemSelected = title;
      } else {
        this.sectionMenuItemSelected = "";
      }
    });
  }

  //Clique sur le bouton de choix de l'appliMenu (Version mobile)(bouton en haut à gauche)
  public onAppliMenuButtonClick(): void {
    this.isAppliMenuDisplay = !this.isAppliMenuDisplay;
    if (this.isSectionMenuDisplay) {
      this.isSectionMenuDisplay = false;
    }
  }
  //Clique sur un choix de appliMenu (Version Mobile)
  public onAppliMenuItemClick(name: string): void {
    this.isAppliMenuDisplay = false;
    this.listMenuLeftService.listMenu.next([]);
    this.appliService.title.next(name);
  }

  //Clique sur le bouton SectionMenu de la navbar mobile
  public onSectionMenuButtonClick(): void {
    this.isSectionMenuDisplay = !this.isSectionMenuDisplay;
    if (this.isAppliMenuDisplay) {
      this.isAppliMenuDisplay = false;
    }
  }
  //Clique sur un élément du SectionMenu de la navbar Mobile
  public onSectionMenuItemClick(name: string): void {
    this.isSectionMenuDisplay = false;
  }

  ngOnDestroy(): void {
    this.currentAppliMenuSelectedSubscription.unsubscribe();
    this.titlePageSubscription.unsubscribe();
  }
}
