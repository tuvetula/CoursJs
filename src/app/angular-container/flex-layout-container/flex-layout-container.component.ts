import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { FlexLayoutService } from 'src/app/shared/services/Angular/flex-layout.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-flex-layout-container',
  templateUrl: './flex-layout-container.component.html',
  styleUrls: ['./flex-layout-container.component.css']
})
export class FlexLayoutContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private flexLayoutService: FlexLayoutService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.flexLayoutService.flexLayoutMenu);
    this.appliService.title.next('Flex-layout');
  }

}
