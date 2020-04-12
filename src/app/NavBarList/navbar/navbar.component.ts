import { Component, OnInit } from "@angular/core";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(
    private angularService: AngularService,
    private listMenuLeftService: ListMenuLeftService
  ) {}

  ngOnInit(): void {}
  public onClickAngular(){
    this.angularService.title.next('Angular');
    this.listMenuLeftService.listMenu.next([]);
  }
}
