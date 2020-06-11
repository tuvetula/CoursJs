import { Component, OnInit } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { RequetesHttpService } from "src/app/shared/services/Menus/Angular/requetes-http.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-requetes-http-container",
  templateUrl: "./requetes-http-container.component.html",
  styleUrls: ["./requetes-http-container.component.css"],
})
export class RequetesHttpContainerComponent implements OnInit {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private requeteHttpService: RequetesHttpService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(
      this.requeteHttpService.requeteHttpMenu
    );
    this.appliService.title.next('Requêtes Http');
  }
}
