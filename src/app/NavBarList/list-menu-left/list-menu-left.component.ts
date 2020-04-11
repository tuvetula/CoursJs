import { Component, OnInit, OnDestroy } from "@angular/core";
import { ListLessonsService } from "../../shared/services/list-lessons.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-lessons",
  templateUrl: "./list-menu-left.component.html",
  styleUrls: ["./list-menu-left.component.css"],
})
export class ListMenuLeftComponent implements OnInit, OnDestroy {
  private listLessonsSubscription: Subscription;
  public listMenu: { name: string; url: string }[];

  constructor(private listLessonsService: ListLessonsService) {}

  ngOnInit(): void {
    this.listLessonsSubscription = this.listLessonsService.listMenu.subscribe(
      (listMenu) => {
        this.listMenu = listMenu;
      }
    );
  }
  ngOnDestroy() {
    this.listLessonsSubscription.unsubscribe();
  }
}
