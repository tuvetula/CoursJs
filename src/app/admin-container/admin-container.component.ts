import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppliService } from '../shared/services/Menus/appli.service';
import { LessonsMenuService } from '../shared/services/Menus/lessons-menu.service';
import { AdminService } from '../shared/services/Menus/Admin/admin.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent implements OnInit,OnDestroy {
  private nameSection: string = "Administration";
  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenuName.next(this.nameSection);
    //Configuration title
    this.appliService.title.next(this.nameSection);
    //On paramètre les lessons
    this.lessonsMenuService.lessonMenu.next(this.adminService.adminMenu);
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }

}
