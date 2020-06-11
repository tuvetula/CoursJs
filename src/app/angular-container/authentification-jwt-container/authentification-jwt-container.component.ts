import { Component, OnInit } from '@angular/core';
import { AuthentificationJwtService } from 'src/app/shared/services/Menus/Angular/authentification.jwt.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-authentification-jwt-container',
  templateUrl: './authentification-jwt-container.component.html',
  styleUrls: ['./authentification-jwt-container.component.css'],
  providers: [AuthentificationJwtService]
})
export class AuthentificationJwtContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private authentificationJwtService: AuthentificationJwtService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.authentificationJwtService.authentificationJwtMenu);
    this.appliService.title.next("AuthentificationJwt");
  }

}
