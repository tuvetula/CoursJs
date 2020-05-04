import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { AsynchroneService } from 'src/app/shared/services/Javascript/asynchrone.service';

@Component({
  selector: 'app-asynchrone-container',
  templateUrl: './asynchrone-container.component.html',
  styleUrls: ['./asynchrone-container.component.css'],
  providers: [AsynchroneService]
})
export class AsynchroneContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private appliService: AppliService,
    private asynchroneService: AsynchroneService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.asynchroneService.asynchroneMenu);
    this.appliService.title.next('Asynchrone');
  }

}
