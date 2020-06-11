import { Component, OnInit } from '@angular/core';
import { LocationHistoryService } from 'src/app/shared/services/Menus/Javascript/location-history.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-location-history-container',
  templateUrl: './location-history-container.component.html',
  styleUrls: ['./location-history-container.component.css'],
  providers: [LocationHistoryService]
})
export class LocationHistoryContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService,
    private LocationHistoryService: LocationHistoryService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.LocationHistoryService.locationHistoryMenu);
    this.appliService.title.next('Location&History');
  }

}
