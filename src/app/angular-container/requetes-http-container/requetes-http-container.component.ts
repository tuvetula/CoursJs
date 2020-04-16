import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { RequetesHttpService } from "src/app/shared/services/Angular/requetes-http.service";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: "app-requetes-http-container",
  templateUrl: "./requetes-http-container.component.html",
  styleUrls: ["./requetes-http-container.component.css"],
})
export class RequetesHttpContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private requeteHttpService: RequetesHttpService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(
      this.requeteHttpService.requeteHttpMenu
    );
    this.appliService.title.next('Requêtes Http');
  }
}
