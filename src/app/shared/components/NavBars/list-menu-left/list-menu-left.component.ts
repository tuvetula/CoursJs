import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "../../../services/Menus/list-menu-left.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Component({
  selector: "app-list-lessons",
  templateUrl: "./list-menu-left.component.html",
  styleUrls: ["./list-menu-left.component.css"],
  animations: [
    trigger("menu", [
      state(
        "hide",
        style({
          overflow: "hidden",
          "max-height": 0,
        })
      ),
      state(
        "show",
        style({
          overflow: "hidden",
          "max-height": "100%",
        })
      ),
      transition("hide => show", animate("300ms")),
      transition("show => hide", animate("100ms")),
    ]),
  ],
})
export class ListMenuLeftComponent implements OnInit, OnDestroy {
  private listLessonsSubscription: Subscription;
  public LessonMenu: LessonMenuModel[];
  public selectMenu: string;
  public currentStateMenu: string = "hide";

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listLessonsSubscription = this.listMenuLeftService.listMenu.subscribe(
      (listMenu) => {
          this.currentStateMenu = "hide";
          this.LessonMenu = listMenu;
        //Si le nouveau LessonMenu contient des données, on change le texte du bouton (version mobile)
        if (this.LessonMenu.length > 0) {
          const url: string = this.router.url;
          const chapter = url.slice(url.lastIndexOf("/") + 1);
          const menuMatchingIndex = this.LessonMenu.findIndex(
            (el) => el.url.slice(el.url.lastIndexOf("/") + 1) === chapter
          );
          //Si l'url d'entrée sur site est sur chapitre alors on modifie le menu sélectionné
          if (menuMatchingIndex >= 0) {
            this.selectMenu = this.LessonMenu[menuMatchingIndex].name;
            //sinon on redirige vers le premier chapitre
          } else {
            this.selectMenu = "Sélectionner une section"
            this.currentStateMenu = "show";
          }
        }
      }
    );
  }
  public onButtonMenuCollapsedClick() {
    this.currentStateMenu = this.currentStateMenu === "hide" ? "show" : "hide";
  }
  public onMenuCollapsedItemClick(name: string) {
    this.selectMenu = name;
    this.currentStateMenu = "hide";
  }
  ngOnDestroy() {
    this.listLessonsSubscription.unsubscribe();
  }
}
