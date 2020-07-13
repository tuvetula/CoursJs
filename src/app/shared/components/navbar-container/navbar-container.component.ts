import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/Utilities/screen-size.service';
import { AppliService } from '../../services/Menus/appli.service';
import { AppliMenuModel } from '../../models/Menus/appliMenu.model';
import { ChapterMenuModel } from '../../models/Menus/menus.model';
import { AuthentificationService } from '../../services/Auth/authentification.service';
import { UserStatueModel } from '../../models/User/userStatue.model';
import { CurrentUserService } from '../../services/User/current-user.service';
import { UserFirestoreModel } from '../../models/User/current-user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninModalComponent } from '../Modals/signin-modal/signin-modal.component';
import { SignupModalComponent } from '../Modals/signup-modal/signup-modal.component';

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
  
  public currentUser: UserFirestoreModel;
  private currentUserSubscription: Subscription;
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
    private appliService: AppliService,
    private currentUserService: CurrentUserService,
    private modalService: NgbModal
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
    this.userStatueSubscription = this.authenticationService.userStatue.subscribe(
      (value) => {
        this.userStatue = value;
      }
    );
    //On souscrit au currentUser
    this.currentUserSubscription = this.currentUserService.currentUser.subscribe(
      currentUser => this.currentUser = currentUser
    )
  }

  public createComponent(event: string){
    let component: typeof SigninModalComponent | typeof SignupModalComponent
    if(event === "SignIn"){
      component = SigninModalComponent
    } else if (event === "SignUp"){
      component = SignupModalComponent
    }
    this.modalService.open(component,{centered:true})
  }
  
  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
    this.currentAppliMenuSelectedSubscription.unsubscribe();
    this.userStatueSubscription.unsubscribe();
  }
}
