import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouteService } from '../shared/services/route.service';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router,
    private routeService: RouteService) {}

  ngOnInit(): void {
    //On envoi la route actuelle pour modification navbar
    this.routeService.currentRoute.next(this.router.url);
  }
}
