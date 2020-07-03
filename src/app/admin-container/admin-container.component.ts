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

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.adminService.adminMenu);
    this.appliService.title.next('Administration');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }

}
