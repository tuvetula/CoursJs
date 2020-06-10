import { Injectable } from "@angular/core";
import { ChapterMenuModel } from "../../../models/Menus/menus.model";
import { ComposantService } from './composant.service';
import { DirectiveService } from './directive.service';
import { ObservableService } from './observable.service';
import { ServicesService } from './services.service';
import { RoutingService } from './routing.service';
import { FormulairesService } from './formulaires.service';
import { PipeService } from './pipe.service';
import { RequetesHttpService } from './requetes-http.service';
import { ModuleService } from './module.service';
import { AnimationsService } from './animations.service';
import { TestsService } from './tests.service';
import { FlexLayoutService } from './flex-layout.service';
import { MeanService } from './mean.service';
import { AuthentificationJwtService } from './authentification.jwt.service';

@Injectable()
export class AngularService {
  public angularMenu: ChapterMenuModel[];

  constructor(
    private composantsService: ComposantService,
    private directiveService: DirectiveService,
    private ObservablesService: ObservableService,
    private servicesService: ServicesService,
    private routingService: RoutingService,
    private formulairesService: FormulairesService,
    private pipesService: PipeService,
    private requetesHttpService: RequetesHttpService,
    private modulesService: ModuleService,
    private animationsService: AnimationsService,
    private testsService: TestsService,
    private flexLayoutService: FlexLayoutService,
    private meanService: MeanService,
    private authentificationJwtService: AuthentificationJwtService

  ) {
    this.angularMenu = [
      { name: "Composants", url: "/Angular/Composants", lessonsMenu: this.composantsService.composantMenu , keywords:['Composants']},
      { name: "Directives", url: "/Angular/Directives", lessonsMenu: this.directiveService.directiveMenu, keywords:['Directives'] },
      { name: "Observables", url: "/Angular/Observables", lessonsMenu: this.ObservablesService.observableMenu,  keywords:['Observables'] },
      { name: "Services", url: "/Angular/Services", lessonsMenu: this.servicesService.serviceMenu, keywords:['Services']},
      { name: "Routing", url: "/Angular/Routing", lessonsMenu: this.routingService.routingMenu ,  keywords:['Routing' , "Router"] },
      { name: "Formulaires", url: "/Angular/Formulaires", lessonsMenu: this.formulairesService.formulairesMenu, keywords:['Formulaires','Forms'] },
      { name: "Pipes", url: "/Angular/Pipes", lessonsMenu: this.pipesService.pipeMenu, keywords:['Pipes'] },
      { name: "Requetes-Http", url: "/Angular/RequetesHttp", lessonsMenu: this.requetesHttpService.requeteHttpMenu, keywords:['http' , 'requetes' , 'request' , 'requêtes'] },
      { name: "Modules", url: "/Angular/Modules", lessonsMenu: this.modulesService.modulesMenu, keywords:['Modules'] },
      { name: "Animations", url: "/Angular/Animations", lessonsMenu: this.animationsService.animationsMenu,  keywords:['Animations']},
      { name: "Tests", url: "/Angular/Tests", lessonsMenu: this.testsService.testsMenu, keywords:['Tests'] },
      { name: "Flex-layout", url: "/Angular/FlexLayout", lessonsMenu: this.flexLayoutService.flexLayoutMenu, keywords:['FlexLayout']},
      { name: "Mean", url: "/Angular/Mean", lessonsMenu: this.meanService.meanMenu, keywords:['Mean'] },
      { name: "AuthentificationJwt", url: "/Angular/AuthentificationJwt", lessonsMenu: this.authentificationJwtService.authentificationJwtMenu , keywords:['Authentification','Jwt']},
    ];
  }
}
