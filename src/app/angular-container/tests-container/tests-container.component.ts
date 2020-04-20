import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/shared/services/Angular/tests.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-tests-container',
  templateUrl: './tests-container.component.html',
  styleUrls: ['./tests-container.component.css']
})
export class TestsContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private testsService: TestsService,
    private appliService: AppliService  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.testsService.testsMenu);
    this.appliService.title.next('Tests');
  }

}
