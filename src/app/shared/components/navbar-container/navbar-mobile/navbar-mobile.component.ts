import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { AppliMenuModel } from "src/app/shared/models/Menus/appliMenu.model";
import { ChapterMenuModel } from "src/app/shared/models/Menus/menus.model";
import { UserStatueModel } from "src/app/shared/models/User/userStatue.model";
import { Router } from "@angular/router";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { map } from "rxjs/operators";
import { DocumentClickService } from "src/app/shared/services/Utilities/document-click.service";
import { CurrentUserModel } from 'src/app/shared/models/User/current-user.model';

@Component({
  selector: "app-navbar-mobile",
  templateUrl: "./navbar-mobile.component.html",
  styleUrls: ["./navbar-mobile.component.css"],
})
export class NavbarMobileComponent implements OnInit, AfterViewInit {
  //export Input pour composant enfant profilPicture
  public source: string = "navbar";
  //AppliMenu
  private documentClickSubscription: Subscription;
  public chapterMenuItemSelected: Observable<string>;

  @Input() appliMenu: AppliMenuModel[];
  @Input() appliMenuItemSelected: string;
  @Input() userStatue: UserStatueModel;
  @Input() currentUser: CurrentUserModel;
  @Input() isNavbarThemeIsDark: boolean;
  @Input() classToAdd: string;
  @Input() chapterMenu: ChapterMenuModel[];

  @Output('loadComponentEvent') public loadComponentEvent: EventEmitter<string> = new EventEmitter;

  public isBurgerMenuDropdownDisplay: () => boolean;
  @ViewChild("burgerMenuDropdownMenu") burgerMenuDropdownMenu: ElementRef;
  public isChapterMenuDropdownDisplay: () => boolean;
  @ViewChild("chapterMenuDropdown") chapterMenuDropdown: ElementRef;

  //Pour burgerMenu lors du focus ou blur du searchBar
  public hideElements: boolean = false;

  constructor(
    private router: Router,
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private authentificationService: AuthentificationService,
    private documentClickService: DocumentClickService
  ) {}

  ngOnInit(): void {
    //On souscrit au titre de la page pour paramétrer le bouton chaptersMenu
    this.chapterMenuItemSelected = this.appliService.title.pipe(
      map((title) => (title === this.appliMenuItemSelected ? "" : title))
    );
    //On souscrit au click
    this.documentClickSubscription = this.documentClickService.documentClickedTarget.subscribe(
      (target) => {
        if (
          this.isBurgerMenuDropdownDisplay() ||
          this.isChapterMenuDropdownDisplay()
        ) {
          this.documentClickListener(target);
        }
      }
    );
  }
  ngAfterViewInit(): void {
    this.isBurgerMenuDropdownDisplay = () =>
      this.burgerMenuDropdownMenu.nativeElement.classList.contains("slideIn");
    this.isChapterMenuDropdownDisplay = () => {
      if (this.chapterMenuDropdown) {
        return this.chapterMenuDropdown.nativeElement.classList.contains(
          "slideIn"
        );
      } else {
        return false;
      }
    };
  }
  //Methode appellé lors de focus ou blur sur searchBarInput
  public onSearchBarInputFocus(event: boolean) {
    if (event) {
      this.burgerMenuDropdownMenu.nativeElement.classList.add("searchFocus");
      setTimeout(() => {
        this.hideElements = true;
      }, 300);
    } else {
      this.burgerMenuDropdownMenu.nativeElement.classList.remove("searchFocus");
      setTimeout(() => {
        this.hideElements = false;
      }, 300);
    }
  }
  //Clique sur bouton burgerMenu
  public toggleBurgerMenuDropdown(): void {
    this.burgerMenuDropdownMenu.nativeElement.classList.toggle("slideIn");
  }
  //Clique sur un choix de burgerMenuDropdown
  public burgerMenuDropdownItemClick(name: string): void {
    //On remet le lessonsMenu à vide (sert pour quand on sort de Mon compte)
    if (this.lessonsMenuService.lessonMenu.value.length) {
      this.lessonsMenuService.lessonMenu.next([]);
    }
    this.toggleBurgerMenuDropdown();
  }
  //Clique sur bouton chapterMenu
  public toggleChapterMenuDropdown(): void {
    this.chapterMenuDropdown.nativeElement.classList.toggle("slideIn");
  }
  //Clique sur chapterMenuDropdown item
  public onChapterMenuDropdownItemClick(): void {
    this.toggleChapterMenuDropdown();
  }
  //Déconnexion
  public logout() {
    this.authentificationService.logout().then(() => {
      this.burgerMenuDropdownMenu.nativeElement.classList.remove("slideIn");
      this.router.navigate(["/"]);
    });
  }
  private documentClickListener(target: HTMLElement): void {
    //Si le burgerMenuDropdown est affiché et que son élément parent ne contient pas target
    //(ni le bouton burgerMenu ni le burgerDropdownMenu)
    if (
      this.isBurgerMenuDropdownDisplay() &&
      !this.burgerMenuDropdownMenu.nativeElement.parentNode.contains(target)
    ) {
      this.toggleBurgerMenuDropdown();
    }
    if (
      this.chapterMenuDropdown &&
      this.isChapterMenuDropdownDisplay() &&
      !this.chapterMenuDropdown.nativeElement.parentNode.contains(target)
    ) {
      this.toggleChapterMenuDropdown();
    }
  }

  ngOnDestroy(): void {
    this.documentClickSubscription.unsubscribe();
  }
}
