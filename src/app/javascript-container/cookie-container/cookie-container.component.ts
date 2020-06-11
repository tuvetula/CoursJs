import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/shared/services/Menus/Javascript/cookie.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-cookie-container',
  templateUrl: './cookie-container.component.html',
  styleUrls: ['./cookie-container.component.css'],
  providers: [CookiesService]
})
export class CookieContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private cookiesService: CookiesService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.cookiesService.cookiesMenu);
    this.appliService.title.next('Cookies&LocalStorage');
  }

}
