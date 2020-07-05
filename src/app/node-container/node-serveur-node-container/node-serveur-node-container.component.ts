import { Component, OnInit } from "@angular/core";
import { AppliService } from "src/app/shared/services/Menus/appli.service";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { NodeServeurNodeService } from "src/app/shared/services/Menus/Node/node-serveur-node.service";

@Component({
  selector: "app-node-serveur-node-container",
  templateUrl: "./node-serveur-node-container.component.html",
  styleUrls: ["./node-serveur-node-container.component.css"],
})
export class NodeServeurNodeContainerComponent implements OnInit {
  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private nodeServeurNodeService: NodeServeurNodeService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(
      this.nodeServeurNodeService.nodeServeurNodeMenu
    );
    this.appliService.title.next("Serveur Node");
  }
}
