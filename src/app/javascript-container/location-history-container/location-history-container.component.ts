import { Component, OnInit } from '@angular/core';
import { LocationHistoryService } from 'src/app/shared/services/Menus/Javascript/location-history.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-location-history-container',
  templateUrl: './location-history-container.component.html',
  styleUrls: ['./location-history-container.component.css'],
  providers: [LocationHistoryService]
})
export class LocationHistoryContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private appliService: AppliService,
    private LocationHistoryService: LocationHistoryService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.LocationHistoryService.locationHistoryMenu);
    this.appliService.title.next('Location&History');
  }

}
