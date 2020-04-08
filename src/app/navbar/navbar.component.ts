import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../shared/services/component.service';
import { DirectiveService } from '../shared/services/directive.service';
import { ObservableService } from '../shared/services/observable.service';
import { ServicesService } from '../shared/services/services.service';
import { RoutingService } from '../shared/services/routing.service';
import { FormationService } from '../shared/services/formation.service';
import { FormulairesService } from '../shared/services/formulaires.service';
import { PipeService } from '../shared/services/pipe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public formationMenu: {name:string , url:string}[];
  public componentMenu: {name:string , url:string}[];
  public directiveMenu: {name:string , url:string}[];
  public observableMenu: {name:string , url:string}[];
  public serviceMenu: {name:string , url:string}[];
  public routingMenu: {name:string , url:string}[];
  public formulairesMenu: {name:string , url:string}[];
  public pipesMenu: {name:string , url:string}[];
  public httpRequestMenu: {name:string , url:string}[];
  public modulesMenu: {name:string , url:string}[];
  public animationsMenu: {name:string , url:string}[];
  public testsMenu: {name:string , url:string}[];


  constructor(
    private formationService: FormationService,
    private componentService: ComponentService,
    private directiveService: DirectiveService,
    private observableService: ObservableService,
    private servicesService: ServicesService,
    private routingService: RoutingService,
    private formulaireService: FormulairesService,
    private pipeService: PipeService) { }

  ngOnInit(): void {
    this.formationMenu = this.formationService.formationMenu;
    this.componentMenu = this.componentService.componentMenu;
    this.directiveMenu = this.directiveService.directiveMenu;
    this.observableMenu = this.observableService.observableMenu;
    this.serviceMenu = this.servicesService.serviceMenu;
    this.routingMenu = this.routingService.routingMenu;
    this.formulairesMenu = this.formulaireService.formulairesMenu;
    this.pipesMenu = this.pipeService.pipeMenu;
  }

}
