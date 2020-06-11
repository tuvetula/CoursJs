import { Component, OnInit } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { FormulairesService } from "src/app/shared/services/Menus/Angular/formulaires.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-formulaires-container",
  templateUrl: "./formulaires-container.component.html",
  styleUrls: ["./formulaires-container.component.css"],
})
export class FormulairesContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private formulairesService: FormulairesService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(
      this.formulairesService.formulairesMenu
    );
    this.appliService.title.next('Formulaires');
  }
}
