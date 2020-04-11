import { Component, OnInit } from "@angular/core";
import { SousMenuService } from "src/app/shared/services/sous-menu.service";
import { ListLessonsService } from "src/app/shared/services/list-lessons.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(
    private sousMenuService: SousMenuService,
    private listLessonsService: ListLessonsService
  ) {}

  ngOnInit(): void {}

  onClickAngular() {
    this.sousMenuService.menuClickPathname.next("Angular");
  }
}
