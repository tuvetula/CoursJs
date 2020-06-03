import { Component, OnInit } from '@angular/core';
import { StringService } from 'src/app/shared/services/Menus/Javascript/string.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';

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
