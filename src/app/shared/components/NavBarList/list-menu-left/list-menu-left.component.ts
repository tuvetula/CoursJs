import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "../../../services/list-menu-left.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";

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
      transition("show => hide", animate("100ms"))
    ]),
  ],
})
export class ListMenuLeftComponent implements OnInit, OnDestroy {
  private listLessonsSubscription: Subscription;
  public listMenu: { name: string; url: string }[];
  public isComponentMenuCollapsedDisplay: boolean = false;
  public selectMenu: string;
  public currentStateMenu: string = "hide";

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listLessonsSubscription = this.listMenuLeftService.listMenu.subscribe(
      (listMenu) => {
        //Si le menu a charger n'est pas le même, on repli le menu et on enregistre le nouveau menu
        if (this.listMenu !== listMenu) {
          this.isComponentMenuCollapsedDisplay = false;
          this.currentStateMenu = "hide";
          this.listMenu = listMenu;
        }
        //Si le nouveau menu contient des données, on change le texte du bouton
        if (this.listMenu.length > 0) {
          const url: string = this.router.url;
          const section = url.slice(url.lastIndexOf("/") + 1);
          const menuMatchingIndex = this.listMenu.findIndex(
            (el) => el.url.slice(el.url.lastIndexOf("/") + 1) === section
          );
          if (menuMatchingIndex >= 0) {
            this.selectMenu = this.listMenu[menuMatchingIndex].name;
          } else {
            this.selectMenu = this.listMenu[0].name;
            this.router.navigate([
              url,
              this.listMenu[0].url.slice(
                this.listMenu[0].url.lastIndexOf("/") + 1
              ),
            ]);
          }
        }
      }
    );
  }
  public onButtonMenuCollapsedClick() {
    this.isComponentMenuCollapsedDisplay = !this
      .isComponentMenuCollapsedDisplay;
    this.currentStateMenu = this.currentStateMenu === "hide" ? "show" : "hide";
  }
  public onMenuCollapsedItemClick(name: string) {
    this.selectMenu = name;
    this.isComponentMenuCollapsedDisplay = false;
    this.currentStateMenu = "hide";
  }
  ngOnDestroy() {
    this.listLessonsSubscription.unsubscribe();
  }
}
