import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { Subscription } from "rxjs";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { AppliMenuModel } from "src/app/shared/models/Menus/appliMenu.model";
import { ChapterMenuModel } from "src/app/shared/models/Menus/menus.model";
import { UserStatueModel } from "src/app/shared/models/User/userStatue.model";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
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
  public classToAdd: string;

  public sectionMenu: ChapterMenuModel[];
  public isSectionMenuDisplay: boolean = false;
  private titlePageSubscription: Subscription;
  public sectionMenuItemSelected: string = "";

  public userStatue: UserStatueModel;
  public userStatueSubscription: Subscription;

  constructor(
    private router: Router,
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {
    //On configure le menu à afficher dans le AppliMenu (version Mobile) ou sur la navbar (version lg)
    this.appliMenu = this.appliService.appliMenu;
    //On souscrit pour recevoir le appliMenu selectionné
    this.currentAppliMenuSelectedSubscription = this.appliService.appliMenuSelectSection.subscribe(
      (appliMenu: AppliMenuModel) => {
        this.appliMenuItemSelected = appliMenu.name;
        this.isNavbarThemeIsDark = appliMenu.darkTheme;
        this.sectionMenu =
          appliMenu.chaptersMenu && appliMenu.chaptersMenu.length && appliMenu.chaptersMenu[0].name
            ? appliMenu.chaptersMenu
            : null;
        this.classToAdd = appliMenu.classToAdd;
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
    this.authentificationService
      .logout()
      .then(() => this.router.navigate(["/"]));
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

  //Clique sur le bouton SectionMenu (Version mobile)
  public onSectionMenuButtonClick(): void {
    this.isSectionMenuDisplay = !this.isSectionMenuDisplay;
    if (this.isAppliMenuDisplay) {
      this.isAppliMenuDisplay = false;
    }
  }
  //Clique sur un élément du SectionMenu (Version mobile)
  public onSectionMenuItemClick(name: string): void {
    this.isSectionMenuDisplay = false;
  }

  ngOnDestroy(): void {
    this.currentAppliMenuSelectedSubscription.unsubscribe();
    this.titlePageSubscription.unsubscribe();
    this.userStatueSubscription.unsubscribe();
  }
}
