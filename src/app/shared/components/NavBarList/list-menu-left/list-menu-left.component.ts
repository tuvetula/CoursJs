import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListMenuLeftService } from "../../../services/list-menu-left.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-lessons",
  templateUrl: "./list-menu-left.component.html",
  styleUrls: ["./list-menu-left.component.css"],
})
export class ListMenuLeftComponent implements OnInit, OnDestroy {
  private listLessonsSubscription: Subscription;
  public listMenu: { name: string; url: string }[];
  public isMenuCollapsed: boolean = false;

  constructor(private listMenuLeftService: ListMenuLeftService) {}

  ngOnInit(): void {
    this.listLessonsSubscription = this.listMenuLeftService.listMenu.subscribe(
      (listMenu) => {
        this.listMenu = listMenu;
      }
    );
  }
  public changeIsMenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
  ngOnDestroy() {
    this.listLessonsSubscription.unsubscribe();
  }
}
