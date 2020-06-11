import { Component, OnInit } from '@angular/core';
import { TableauxService } from 'src/app/shared/services/Menus/Javascript/tableaux.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-tableaux-container',
  templateUrl: './tableaux-container.component.html',
  styleUrls: ['./tableaux-container.component.css'],
  providers: [TableauxService]
})
export class TableauxContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private tableauxService: TableauxService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.tableauxService.tableauxMenu);
    this.appliService.title.next('Tableaux');
  }
}
