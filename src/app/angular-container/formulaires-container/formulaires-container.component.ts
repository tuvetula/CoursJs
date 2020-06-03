import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { FormulairesService } from "src/app/shared/services/Menus/Angular/formulaires.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-formulaires-container",
  templateUrl: "./formulaires-container.component.html",
  styleUrls: ["./formulaires-container.component.css"],
})
export class FormulairesContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private formulairesService: FormulairesService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(
      this.formulairesService.formulairesMenu
    );
    this.appliService.title.next('Formulaires');
  }
}
