import { Component, OnInit } from '@angular/core';
import { StringService } from 'src/app/shared/services/Javascript/string.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-string-container',
  templateUrl: './string-container.component.html',
  styleUrls: ['./string-container.component.css'],
  providers: [StringService]
})
export class StringContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listLeftMenuService: ListMenuLeftService,
    private stringService: StringService
  ) { }

  ngOnInit(): void {
    this.listLeftMenuService.listMenu.next(this.stringService.stringMenu);
    this.appliService.title.next('String');
  }

}
