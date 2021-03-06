import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { AppliMenuModel } from "src/app/shared/models/Menus/appliMenu.model";
import { ChapterMenuModel } from "src/app/shared/models/Menus/menus.model";
import { UserStatueModel } from "src/app/shared/models/User/userStatue.model";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { Router } from "@angular/router";
import { UserFirestoreModel } from 'src/app/shared/models/User/current-user.model';

@Component({
  selector: "app-navbar-lg",
  templateUrl: "./navbar-lg.component.html",
  styleUrls: ["./navbar-lg.component.css"],
})
export class NavbarLgComponent implements OnInit {
  //export Input pour composant enfant profilPicture
  public source: string = "navbar";

  @Input() userStatue: UserStatueModel;
  @Input() currentUser: UserFirestoreModel;
  @Input() appliMenu: AppliMenuModel[];
  @Input() classToAdd: string;
  @Input() isNavbarThemeIsDark: boolean;
  @Input() chapterMenu: ChapterMenuModel[];

  public isAppliMenuDisplay: boolean = false;
  public ischapterMenuDisplay: boolean = false;

  @Output('loadComponentEvent') public loadComponentEvent: EventEmitter<string> = new EventEmitter;

  constructor(
    private router: Router,
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {}

  //Déconnexion
  public logout() {
    this.authentificationService
      .logout()
      .then(() => this.router.navigate(["/"]));
  }

  //Clique AppliMenu navbar (Utile si on reste dans le meme component-container)
  public onNavbarButtonClick(name: string, url: string): void {
    const oldUrlSection = this.router.url.split('/')[1];
    const newUrlSection = url.split('/')[1];
    if(oldUrlSection === newUrlSection){
      this.lessonsMenuService.lessonMenu.next([]);
      this.appliService.title.next(name);
    }
  }
}
