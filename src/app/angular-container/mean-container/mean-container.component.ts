import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { MeanService } from 'src/app/shared/services/Angular/mean.service';

@Component({
  selector: 'app-mean-container',
  templateUrl: './mean-container.component.html',
  styleUrls: ['./mean-container.component.css'],
  providers: [MeanService]
})
export class MeanContainerComponent implements OnInit {

  constructor(
    private aplliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private meanService: MeanService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.meanService.meanMenu);
    this.aplliService.title.next('Mean');
  }

}
