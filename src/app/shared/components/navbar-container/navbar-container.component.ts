import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/Utilities/screen-size.service';
import { AppliService } from '../../services/Menus/appli.service';
import { AppliMenuModel } from '../../models/Menus/appliMenu.model';
import { ChapterMenuModel } from '../../models/Menus/menus.model';
import { AuthentificationService } from '../../services/Auth/authentification.service';
import { UserStatueModel } from '../../models/User/userStatue.model';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit,OnDestroy {
  private screenSizeSubscription: Subscription;
  public showNavbarMobile: boolean;
  
  private userStatueSubscription: Subscription;
  private currentAppliMenuSelectedSubscription: Subscription;
  public userStatue: UserStatueModel;
  public appliMenu: AppliMenuModel[];
  public appliMenuItemSelected: string;
  public isNavbarThemeIsDark: boolean;
  public classToAdd: string = "Accueil";
  public chapterMenu: ChapterMenuModel[];
  public chapterMenuItemSelected: Observable<string>;

  constructor(
    private screenSizeService: ScreenSizeService,
    private authenticationService: AuthentificationService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    //On souscrit à la largeur de l'écran
    this.screenSizeSubscription = this.screenSizeService.windowInnerWidth.subscribe(
      windowInnerWidth => {
        if(windowInnerWidth < 960){
          this.showNavbarMobile = true;
        } else {
          this.showNavbarMobile = false;
        }
      }
    );
     //On configure le menu à afficher dans le AppliMenu
     this.appliMenu = this.appliService.appliMenu;
     //On souscrit pour recevoir le appliMenu selectionné
     this.currentAppliMenuSelectedSubscription = this.appliService.appliMenuSelectSection.subscribe(
       (appliMenu: AppliMenuModel) => {
         this.appliMenuItemSelected = appliMenu.name;
         this.isNavbarThemeIsDark = appliMenu.darkTheme;
         this.chapterMenu =
           appliMenu.chaptersMenu &&
           appliMenu.chaptersMenu.length &&
           appliMenu.chaptersMenu[0].name
             ? appliMenu.chaptersMenu
             : null;
         this.classToAdd = appliMenu.classToAdd;
       }
     );
    //On souscrit au userStatue
    this.userStatueSubscription = this.authenticationService.userBehaviourSubject.subscribe(
      (value) => (this.userStatue = value)
    );
  }
  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
    this.currentAppliMenuSelectedSubscription.unsubscribe();
    this.userStatueSubscription.unsubscribe();
  }
}
