import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/shared/services/Menus/Angular/tests.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-tests-container',
  templateUrl: './tests-container.component.html',
  styleUrls: ['./tests-container.component.css']
})
export class TestsContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private testsService: TestsService,
    private appliService: AppliService  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.testsService.testsMenu);
    this.appliService.title.next('Tests');
  }

}
