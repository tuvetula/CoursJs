import { Component, OnInit } from "@angular/core";
import { DirectiveService } from "src/app/shared/services/Angular/directive.service";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: "app-directive-container",
  templateUrl: "./directive-container.component.html",
  styleUrls: ["./directive-container.component.css"],
})
export class DirectiveContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private directivesService: DirectiveService,
    private angularService: AngularService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(
      this.directivesService.directiveMenu
    );
    this.angularService.title.next('Directives');
  }
}
