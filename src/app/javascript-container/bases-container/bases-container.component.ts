import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { BasesService } from 'src/app/shared/services/Menus/Javascript/bases.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-bases-container',
  templateUrl: './bases-container.component.html',
  styleUrls: ['./bases-container.component.css']
})
export class BasesContainerComponent implements OnInit {

  constructor(private lessonsMenuService: LessonsMenuService,
    private basesService: BasesService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.basesService.basesMenu);
    this.appliService.title.next('Bases');
  }

}
