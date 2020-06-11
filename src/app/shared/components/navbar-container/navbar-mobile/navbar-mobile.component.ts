import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AppliMenuModel } from 'src/app/shared/models/Menus/appliMenu.model';
import { ChapterMenuModel } from 'src/app/shared/models/Menus/menus.model';
import { UserStatueModel } from 'src/app/shared/models/User/userStatue.model';
import { Router } from '@angular/router';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AuthentificationService } from 'src/app/shared/services/Auth/authentification.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent implements OnInit {
//export Input pour composant enfant profilPicture
public source: string = "navbar";
//AppliMenu
private currentAppliMenuSelectedSubscription: Subscription;
private userStatueSubscription: Subscription;

public appliMenu: AppliMenuModel[];
public appliMenuItemSelected: string;
public isNavbarThemeIsDark: boolean;
public classToAdd: string;

public chapterMenu: ChapterMenuModel[];
public chapterMenuItemSelected;

public userStatue: UserStatueModel;

constructor(
  private router: Router,
  private appliService: AppliService,
  private lessonsMenuService: LessonsMenuService,
  private authentificationService: AuthentificationService
) {}

ngOnInit(): void {
  //On configure le menu à afficher dans le AppliMenu
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
  //On souscrit au titre de la page pour paramétrer le bouton chaptersMenu
  this.chapterMenuItemSelected = this.appliService.title.pipe(
    map(
      title => title === this.appliMenuItemSelected ? '' : title
    )
  )
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

//Clique sur un choix de appliMenu
public onAppliMenuItemClick(name: string): void {
  if(this.lessonsMenuService.lessonMenu.value.length){
    this.lessonsMenuService.lessonMenu.next([]);
  }
  this.appliService.title.next(name);
}

ngOnDestroy(): void {
  this.currentAppliMenuSelectedSubscription.unsubscribe();
  this.userStatueSubscription.unsubscribe();
}
}

