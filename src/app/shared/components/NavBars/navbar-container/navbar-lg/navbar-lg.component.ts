import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { Subscription, Observable } from "rxjs";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { AppliMenuModel } from "src/app/shared/models/Menus/appliMenu.model";
import { ChapterMenuModel } from "src/app/shared/models/Menus/menus.model";
import { UserStatueModel } from "src/app/shared/models/User/userStatue.model";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-lg",
  templateUrl: "./navbar-lg.component.html",
  styleUrls: ["./navbar-lg.component.css"]
})
  
export class NavbarLgComponent implements OnInit, OnDestroy {
  //export Input pour composant enfant profilPicture
  public source: string = "navbar";
  //AppliMenu
  private currentAppliMenuSelectedSubscription: Subscription;
  public userStatueSubscription: Subscription;

  public appliMenu: AppliMenuModel[];
  public isAppliMenuDisplay: boolean = false;
  public appliMenuItemSelected: string;
  public isNavbarThemeIsDark: boolean;
  public classToAdd: string;

  public chapterMenu: ChapterMenuModel[];
  public ischapterMenuDisplay: boolean = false;

  public userStatue: UserStatueModel;

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
        this.chapterMenu =
          appliMenu.chaptersMenu && appliMenu.chaptersMenu.length && appliMenu.chaptersMenu[0].name
            ? appliMenu.chaptersMenu
            : null;
        this.classToAdd = appliMenu.classToAdd;
      }
    );
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

  //Clique AppliMenu navbar (version lg)
  public onNavbarButtonClick(name: string): void {
    this.listMenuLeftService.listMenu.next([]);
    this.appliService.title.next(name);
  }

  ngOnDestroy(): void {
    this.currentAppliMenuSelectedSubscription.unsubscribe();
    this.userStatueSubscription.unsubscribe();
  }
}
