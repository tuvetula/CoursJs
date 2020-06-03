import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { DateService } from 'src/app/shared/services/Menus/Javascript/date.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.css'],
  providers: [DateService]
})
export class DateContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.dateService.dateMenu);
    this.appliService.title.next('Date');
  }

}
