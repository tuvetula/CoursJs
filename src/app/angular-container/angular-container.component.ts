import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularService } from "../shared/services/Angular/angular.service";
import { Subscription } from "rxjs";
import { ListMenuLeftService } from "../shared/services/list-menu-left.service";
import { ComposantService } from "../shared/services/Angular/composant.service";
import { DirectiveService } from "../shared/services/Angular/directive.service";
import { ObservableService } from "../shared/services/Angular/observable.service";
import { ServicesService } from "../shared/services/Angular/services.service";
import { RoutingService } from "../shared/services/Angular/routing.service";
import { FormulairesService } from "../shared/services/Angular/formulaires.service";
import { PipeService } from "../shared/services/Angular/pipe.service";
import { RequetesHttpService } from "../shared/services/Angular/requetes-http.service";
import { ModuleService } from '../shared/services/Angular/module.service';
import { AnimationsService } from '../shared/services/Angular/animations.service';
import { TestsService } from '../shared/services/Angular/tests.service';
import { Router } from '@angular/router';
import { RouteService } from '../shared/services/route.service';

@Component({
  selector: "app-angular-container",
  templateUrl: "./angular-container.component.html",
  styleUrls: ["./angular-container.component.css"],
  providers: [
    ComposantService,
    DirectiveService,
    ObservableService,
    ServicesService,
    RoutingService,
    FormulairesService,
    PipeService,
    RequetesHttpService,
    ModuleService,
    AnimationsService,
    TestsService
  ],
})
export class AngularContainerComponent implements OnInit, OnDestroy {
  public menu: { name: string; url: string }[] = [];
  public title: string;
  private titleSubscription: Subscription;

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private angularService: AngularService,
    private router: Router,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    //On envoi la route actuelle pour modification navbar
    this.routeService.currentRoute.next(this.router.url);
    //Récupération et modification menu pour sousMenu
    this.modifyAngularMenu();
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

  private modifyAngularMenu(): void{
    this.angularService.angularMenu.slice().forEach(
      (element) => {
        this.menu.push({name: element.name , url: element.url})
      }
    );
    this.menu.forEach(
      element => element.url = element.url.slice(element.url.lastIndexOf('/') + 1)
    );
  }
}
