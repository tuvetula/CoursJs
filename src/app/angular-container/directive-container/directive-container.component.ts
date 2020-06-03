import { Component, OnInit } from "@angular/core";
import { DirectiveService } from "src/app/shared/services/Menus/Angular/directive.service";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-directive-container",
  templateUrl: "./directive-container.component.html",
  styleUrls: ["./directive-container.component.css"],
})
export class DirectiveContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private directivesService: DirectiveService,
    private appliService: AppliService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(
      this.directivesService.directiveMenu
    );
    this.appliService.title.next("Directives");
  }
}
