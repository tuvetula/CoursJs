import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularService } from "../shared/services/Angular/angular.service";
import { map } from "rxjs/operators";
import { SousMenuService } from "../shared/services/sous-menu.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ListLessonsService } from "../shared/services/list-lessons.service";
import { ComponentService } from "../shared/services/Angular/component.service";
import { DirectiveService } from "../shared/services/Angular/directive.service";
import { ObservableService } from "../shared/services/Angular/observable.service";
import { RoutingService } from "../shared/services/Angular/routing.service";
import { ServicesService } from "../shared/services/Angular/services.service";
import { FormulairesService } from "../shared/services/Angular/formulaires.service";
import { PipeService } from "../shared/services/Angular/pipe.service";
import { RequetesHttpService } from "../shared/services/Angular/requetes-http.service";

@Component({
  selector: "app-angular-container",
  templateUrl: "./angular-container.component.html",
  styleUrls: ["./angular-container.component.css"],
})
export class AngularContainerComponent implements OnInit, OnDestroy {
  public menu: { name: string; url: string }[];
  public title: string = "Angular";
  public menuClickSubscription: Subscription;
  public menuClick: string;

  constructor(
    private listLessonsService: ListLessonsService,
    private angularService: AngularService,
    private sousMenuService: SousMenuService,
    private componentService: ComponentService,
    private directiveService: DirectiveService,
    private observableService: ObservableService,
    private routingService: RoutingService,
    private serviceService: ServicesService,
    private formulairesService: FormulairesService,
    private pipeService: PipeService,
    private requeteHttpService: RequetesHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Récupération menu pour sousMenu
    this.menu = this.angularService.angularMenu;
    //Modification listMenu suite click sur sousMenu
    this.menuClickSubscription = this.sousMenuService.menuClickPathname
      .pipe(map((data) => data.slice(data.lastIndexOf("/") + 1)))
      .subscribe((data: string) => {
        this.listLessonsService.listMenu.next(this.getTheListMenuAndSetTitle(data));
      });
  }

  getTheListMenuAndSetTitle(data?: string): { name: string; url: string }[] {
    let listMenuToReturn : { name: string; url: string }[];
    if (data === "Composants" || (this.router.url.includes("Composants") && !data)) {
      listMenuToReturn = this.componentService.componentMenu;
      this.title = "Composants";
    } else if (
      data === "Directives" ||
      (this.router.url.includes("Directives") && !data)
    ) {
      listMenuToReturn = this.directiveService.directiveMenu;
      this.title = "Directives";
    } else if (
      data === "Observables" ||
      (this.router.url.includes("Observables") && !data)
    ) {
      listMenuToReturn = this.observableService.observableMenu;
      this.title = "Observables";
    } else if (data === "Services" || (this.router.url.includes("Services") && !data)) {
      listMenuToReturn = this.serviceService.serviceMenu;
      this.title = "Services";
    } else if (data === "Routing" || (this.router.url.includes("Routing") && !data)) {
      listMenuToReturn = this.routingService.routingMenu;
      this.title = "Routing";
    } else if (
      data === "Formulaires" ||
      (this.router.url.includes("Formulaires") && !data)
    ) {
      listMenuToReturn = this.formulairesService.formulairesMenu;
      this.title = "Formulaires";
    } else if (data === "Pipes" || (this.router.url.includes("Pipes") && !data)) {
      listMenuToReturn = this.pipeService.pipeMenu;
      this.title = "Pipes";
    } else if (
      data === "RequetesHttp" ||
      (this.router.url.includes("RequetesHttp") && !data)
    ) {
      listMenuToReturn = this.requeteHttpService.requeteHttpMenu;
      this.title = "Requetes Http";
    } else if (data === "Angular"){
      listMenuToReturn = [];
      this.title = "Angular";
    }
    return listMenuToReturn;
  }
  ngOnDestroy(): void {
    this.listLessonsService.listMenu.next([]);
    this.menuClickSubscription.unsubscribe();
  }
}
