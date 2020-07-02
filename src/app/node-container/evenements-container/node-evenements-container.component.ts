import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { NodeEvenementsService } from 'src/app/shared/services/Menus/Node/node-evenements.service';

@Component({
  selector: 'app-node-evenements-container',
  templateUrl: './node-evenements-container.component.html',
  styleUrls: ['./node-evenements-container.component.css']
})
export class NodeEvenementsContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private nodeEvenementsService: NodeEvenementsService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.nodeEvenementsService.NodeEvenementsMenu);
    this.appliService.title.next('Node et les évènements');
  }

}
