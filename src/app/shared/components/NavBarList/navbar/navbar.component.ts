import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { AppliMenuModel } from "src/app/shared/models/appliMenu.model";
import { MenuModel } from "src/app/shared/models/menu.model";
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";
import { UserStatueModel } from "src/app/shared/models/User/userStatue.model";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { Router } from '@angular/router';
import { ThemesService } from 'src/app/shared/services/Themes/themes.service.ts.service';
import { CurrentUserModel } from 'src/app/shared/models/User/current-user.model';
import { CurrentUserService } from 'src/app/shared/services/User/current-user.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("MenuDisplay", [
      transition(":enter", [style({ opacity: 0 }), animate("500ms ease-out")]),
    ]),
    trigger("navbarSection", [
      state(
        "hide",
        style({
          overflow: "hidden",
          "max-height": "0",
          padding: "0px",
        })
      ),
      state(
        "show",
        style({
          overflow: "hidden",
          "max-height": "80px",
          padding: "2px 6px 2px 6px",
        })
      ),
      transition("hide <=> show", animate("800ms ease-out")),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  //export Input pour composant enfant profilPicture
  public source: string = "navbar";
  //AppliMenu
  public appliMenu: AppliMenuModel[];
  public isAppliMenuDisplay: boolean = false;
  private currentAppliMenuSelectedSubscription: Subscription;
  public appliMenuItemSelected: string;
  public isNavbarThemeIsDark: boolean;
  public currentStateSectionNavbar: string = "hide";
  public classToAdd: string;

  public sectionMenu: MenuModel[];
  public isSectionMenuDisplay: boolean = false;
  private titlePageSubscription: Subscription;
  public sectionMenuItemSelected: string = "";

  public userStatue: UserStatueModel;
  public userStatueSubscription: Subscription;

  constructor(
    private router: Router,
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private authentificationService: AuthentificationService,
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
        this.classToAdd = appliMenu.classToAdd;
        this.currentStateSectionNavbar = this.sectionMenu ? "show" : "hide";
      }
    );
    //Utile pour la version lg (Titre)
    this.titlePageSubscription = this.appliService.title.subscribe((title) => {
      if (title !== this.appliMenuItemSelected) {
        this.sectionMenuItemSelected = title;
      } else {
        this.sectionMenuItemSelected = "";
      }
    });
    //On souscrit au userStatue
    this.userStatueSubscription = this.authentificationService.userBehaviourSubject.subscribe(
      (value) => (this.userStatue = value)
    );
  }
  //Déconnexion
  public logout() {
    this.authentificationService.logout()
    .then(() => this.router.navigate(['/']));
  }

  //Clique sur navbar AppliMenu (version lg)
  public onNavbarButtonClick(name: string): void {
    this.listMenuLeftService.listMenu.next([]);
    this.appliService.title.next(name);
  }

  //Clique sur le burgerMenu de choix de l'appliMenu (Version mobile)(bouton en haut à gauche)
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
    this.userStatueSubscription.unsubscribe();
  }
}
