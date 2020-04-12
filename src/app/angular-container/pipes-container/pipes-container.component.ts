import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { PipeService } from "src/app/shared/services/Angular/pipe.service";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: "app-pipes-container",
  templateUrl: "./pipes-container.component.html",
  styleUrls: ["./pipes-container.component.css"],
})
export class PipesContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private pipesService: PipeService,
    private angularService: AngularService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.pipesService.pipeMenu);
    this.angularService.title.next('Pipes');
  }
}
