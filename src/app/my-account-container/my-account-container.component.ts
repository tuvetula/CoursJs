import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { AppliService } from '../shared/services/Menus/appli.service';
import { ListMenuLeftService } from '../shared/services/Menus/list-menu-left.service';
import { MyAccountService } from '../shared/services/Menus/MyAccount/my-account.service';
import { MenuModel } from '../shared/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account-container',
  templateUrl: './my-account-container.component.html',
  styleUrls: ['./my-account-container.component.css'],
  providers: [MyAccountService]
})
export class MyAccountContainerComponent implements OnInit {
  private nameSection: string = "Mon compte";

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private myAccountService: MyAccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.nameSection);
    //On paramètre la section en cours
    this.listMenuLeftService.listMenu.next(this.myAccountService.myAccountMenu);
    //Configuration title
    this.appliService.title.next(this.nameSection);
  }
}
