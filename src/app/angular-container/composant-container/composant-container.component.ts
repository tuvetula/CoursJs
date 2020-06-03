import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { ComposantService } from "src/app/shared/services/Menus/Angular/composant.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-composant-container",
  templateUrl: "./composant-container.component.html",
  styleUrls: ["./composant-container.component.css"],
})
export class ComposantContainerComponent implements OnInit {
  private componentName: string = "Composants"

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private ComposantService: ComposantService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.ComposantService.composantMenu);
    this.appliService.title.next(this.componentName);
  }
}
