import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { BasesService } from 'src/app/shared/services/Javascript/bases.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-bases-container',
  templateUrl: './bases-container.component.html',
  styleUrls: ['./bases-container.component.css']
})
export class BasesContainerComponent implements OnInit {

  constructor(private listMenuLeftService: ListMenuLeftService,
    private basesService: BasesService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.basesService.basesMenu);
    this.appliService.title.next('Bases');
  }

}
