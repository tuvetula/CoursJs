import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { ComponentService } from "src/app/shared/services/Angular/component.service";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: "app-composant-container",
  templateUrl: "./composant-container.component.html",
  styleUrls: ["./composant-container.component.css"],
})
export class ComposantContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private componentService: ComponentService,
    private angularService: AngularService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.componentService.componentMenu);
    this.angularService.title.next('Composants');
  }
}
