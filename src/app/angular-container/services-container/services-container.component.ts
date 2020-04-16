import { Component, OnInit } from "@angular/core";
import { ServicesService } from "src/app/shared/services/Angular/services.service";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: "app-services-container",
  templateUrl: "./services-container.component.html",
  styleUrls: ["./services-container.component.css"],
})
export class ServicesContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private servicesService: ServicesService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.servicesService.serviceMenu);
    this.appliService.title.next('Services');
  }
}
