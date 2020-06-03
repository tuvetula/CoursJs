import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { PipeService } from "src/app/shared/services/Menus/Angular/pipe.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-pipes-container",
  templateUrl: "./pipes-container.component.html",
  styleUrls: ["./pipes-container.component.css"],
})
export class PipesContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private pipesService: PipeService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.pipesService.pipeMenu);
    this.appliService.title.next('Pipes');
  }
}
