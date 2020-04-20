import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";
import { AngularService } from "../shared/services/Angular/angular.service";
import { ListMenuLeftService } from "../shared/services/list-menu-left.service";
import { ComposantService } from "../shared/services/Angular/composant.service";
import { DirectiveService } from "../shared/services/Angular/directive.service";
import { ObservableService } from "../shared/services/Angular/observable.service";
import { ServicesService } from "../shared/services/Angular/services.service";
import { RoutingService } from "../shared/services/Angular/routing.service";
import { FormulairesService } from "../shared/services/Angular/formulaires.service";
import { PipeService } from "../shared/services/Angular/pipe.service";
import { RequetesHttpService } from "../shared/services/Angular/requetes-http.service";
import { ModuleService } from "../shared/services/Angular/module.service";
import { AnimationsService } from "../shared/services/Angular/animations.service";
import { TestsService } from "../shared/services/Angular/tests.service";
import { AppliService } from "../shared/services/appli.service";
import { MenuModel } from '../shared/models/menu.model';

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
    TestsService,
  ],
})
export class AngularContainerComponent
  implements OnInit, OnDestroy, AfterViewChecked {
  private nameSection: string = "Angular";
  public menu: MenuModel[] = [];

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private appliService: AppliService,
    private angularService: AngularService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.nameSection);
    //Récupération et modification menu pour sousMenu
    this.modifyAngularMenuUrl();
    //Configuration title
    this.appliService.title.next(this.nameSection);
    
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  ngOnDestroy(): void {
    this.listMenuLeftService.listMenu.next([]);
  }

  public titleIsAngular() {
    return this.appliService.title.value === this.nameSection;
  }
  private modifyAngularMenuUrl(): void {
    this.angularService.angularMenu.slice().forEach((element) => {
      this.menu.push({ name: element.name, url: element.url });
    });
    this.menu.forEach(
      (element) =>
        (element.url = element.url.slice(element.url.lastIndexOf("/") + 1))
    );
  }
}