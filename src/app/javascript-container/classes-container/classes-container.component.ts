import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { ClassesService } from 'src/app/shared/services/Menus/Javascript/classes.service';

@Component({
  selector: 'app-classes-container',
  templateUrl: './classes-container.component.html',
  styleUrls: ['./classes-container.component.css'],
  providers: [ClassesService]
})
export class ClassesContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.classesService.classesMenu);
    this.appliService.title.next('Classes');
  }

}
