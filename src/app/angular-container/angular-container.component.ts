import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularService } from "../shared/services/Angular/angular.service";
import { Subscription } from "rxjs";
import { ListMenuLeftService } from "../shared/services/list-menu-left.service";
import { ComponentService } from "../shared/services/Angular/component.service";
import { DirectiveService } from "../shared/services/Angular/directive.service";
import { ObservableService } from "../shared/services/Angular/observable.service";
import { ServicesService } from "../shared/services/Angular/services.service";
import { RoutingService } from "../shared/services/Angular/routing.service";
import { FormulairesService } from "../shared/services/Angular/formulaires.service";
import { PipeService } from "../shared/services/Angular/pipe.service";
import { RequetesHttpService } from "../shared/services/Angular/requetes-http.service";

@Component({
  selector: "app-angular-container",
  templateUrl: "./angular-container.component.html",
  styleUrls: ["./angular-container.component.css"],
  providers: [
    ComponentService,
    DirectiveService,
    ObservableService,
    ServicesService,
    RoutingService,
    FormulairesService,
    PipeService,
    RequetesHttpService,
  ],
})
export class AngularContainerComponent implements OnInit, OnDestroy {
  public menu: { name: string; url: string }[];
  public title: string;
  private titleSubscription: Subscription;

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private angularService: AngularService
  ) {}

  ngOnInit(): void {
    //Récupération menu pour sousMenu
    this.menu = this.angularService.angularMenu;
    //Récupération title
    this.titleSubscription = this.angularService.title.subscribe((title) =>
      setTimeout(() => {
        this.title = title;
      }, 0)
    );
  }

  ngOnDestroy(): void {
    this.listMenuLeftService.listMenu.next([]);
    this.titleSubscription.unsubscribe();
  }
}
