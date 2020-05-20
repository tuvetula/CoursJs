import { Component, OnInit } from '@angular/core';
import { AuthentificationJwtService } from 'src/app/shared/services/Angular/authentification.jwt.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-authentification-jwt-container',
  templateUrl: './authentification-jwt-container.component.html',
  styleUrls: ['./authentification-jwt-container.component.css'],
  providers: [AuthentificationJwtService]
})
export class AuthentificationJwtContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private authentificationJwtService: AuthentificationJwtService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.authentificationJwtService.authentificationJwtMenu);
    this.appliService.title.next("AuthentificationJwt");
  }

}
