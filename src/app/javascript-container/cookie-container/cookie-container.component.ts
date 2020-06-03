import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/shared/services/Menus/Javascript/cookie.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';

@Component({
  selector: 'app-cookie-container',
  templateUrl: './cookie-container.component.html',
  styleUrls: ['./cookie-container.component.css'],
  providers: [CookiesService]
})
export class CookieContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private cookiesService: CookiesService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.cookiesService.cookiesMenu);
    this.appliService.title.next('Cookies&LocalStorage');
  }

}
