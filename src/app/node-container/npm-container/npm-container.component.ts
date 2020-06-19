import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { NpmService } from 'src/app/shared/services/Menus/Node/npm.service';

@Component({
  selector: 'app-npm-container',
  templateUrl: './npm-container.component.html',
  styleUrls: ['./npm-container.component.css']
})
export class NpmContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private npmService: NpmService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.npmService.npmMenu);
    this.appliService.title.next('Npm');
  }

}
