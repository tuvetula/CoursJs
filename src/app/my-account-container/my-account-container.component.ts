import { Component, OnInit } from '@angular/core';
import { AppliService } from '../shared/services/Menus/appli.service';
import { LessonsMenuService } from '../shared/services/Menus/lessons-menu.service';
import { MyAccountService } from '../shared/services/Menus/MyAccount/my-account.service';

@Component({
  selector: 'app-my-account-container',
  templateUrl: './my-account-container.component.html',
  styleUrls: ['./my-account-container.component.css'],
  providers: [MyAccountService]
})
export class MyAccountContainerComponent implements OnInit {
  private componentName: string = "Mon compte";

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private myAccountService: MyAccountService,
  ) { }

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.componentName);
    //On paramètre la section en cours
    this.lessonsMenuService.lessonMenu.next(this.myAccountService.myAccountMenu);
    //Configuration title
    this.appliService.title.next(this.componentName);
  }
}
