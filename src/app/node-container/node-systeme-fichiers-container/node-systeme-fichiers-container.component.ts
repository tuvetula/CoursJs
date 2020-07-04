import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { NodeSystemeFichiersService } from 'src/app/shared/services/Menus/Node/node-systeme-fichiers.service';

@Component({
  selector: 'app-node-systeme-fichiers',
  templateUrl: './node-systeme-fichiers-container.component.html',
  styleUrls: ['./node-systeme-fichiers-container.component.css']
})
export class NodeSystemeFichiersContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private nodeSystemeFichiersService: NodeSystemeFichiersService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.nodeSystemeFichiersService.nodeSystemeFichiersMenu);
    this.appliService.title.next('Le système de fichiers');
  }

}
