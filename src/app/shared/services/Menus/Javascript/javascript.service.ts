import { Injectable } from "@angular/core";
import { ChapterMenuModel } from "../../../models/Menus/menus.model";
import { AsynchroneService } from "./asynchrone.service";
import { BasesService } from "./bases.service";
import { CanvasService } from "./canvas.service";
import { ClassesService } from "./classes.service";
import { ConditionsBouclesService } from "./conditions-boucles.service";
import { CookiesService } from "./cookie.service";
import { DateService } from "./date.service";
import { DomService } from "./dom.service";
import { EvenementsService } from "./evenements.service";
import { FonctionsService } from "./fonctions.service";
import { GestionErreurService } from "./gestion-erreur.service";
import { LocationHistoryService } from "./location-history.service";
import { ModulesJsService } from "./modules.service";
import { NombresService } from "./nombres.service";
import { ObjetsService } from "./objets.service";
import { ReseauService } from "./reseau.service";
import { StringService } from "./string.service";
import { TableauxService } from "./tableaux.service";

@Injectable()
export class JavascriptService {
  public javascriptMenu: ChapterMenuModel[];

  constructor(
    private asynchroneService: AsynchroneService,
    private basesService: BasesService,
    private canvasService: CanvasService,
    private classesService: ClassesService,
    private conditionsBouclesService: ConditionsBouclesService,
    private cookiesService: CookiesService,
    private dateService: DateService,
    private domService: DomService,
    private evenementsService: EvenementsService,
    private fonctionsService: FonctionsService,
    private gestionErreurService: GestionErreurService,
    private locationHistoryService: LocationHistoryService,
    private modulesService: ModulesJsService,
    private nombresService: NombresService,
    private objetsService: ObjetsService,
    private reseauService: ReseauService,
    private stringService: StringService,
    private tableauxService: TableauxService
  ) {
    this.javascriptMenu = [
      {
        name: "Bases",
        url: "/Javascript/Bases",
        lessonsMenu: this.basesService.basesMenu,
        keywords:['Bases']
      },
      {
        name: "Conditions & Boucles",
        url: "/Javascript/Conditions-Boucles",
        lessonsMenu: this.conditionsBouclesService.conditionsBouclesMenu,
        keywords:['Conditions','Boucles','Loop']
      },
      {
        name: "Nombres",
        url: "/Javascript/Nombres",
        lessonsMenu: this.nombresService.nombresMenu,
        keywords:['Nombres','Numbers']
      },
      {
        name: "String",
        url: "/Javascript/String",
        lessonsMenu: this.stringService.stringMenu,
        keywords:['String','chaine de caractères']
      },
      {
        name: "Objets",
        url: "/Javascript/Objets",
        lessonsMenu: this.objetsService.objetsMenu,
        keywords:['Objets','Objects']
      },
      {
        name: "Fonctions",
        url: "/Javascript/Fonctions",
        lessonsMenu: this.fonctionsService.fonctionsMenu,
        keywords:['Fonctions','Functions']
      },
      {
        name: "Tableaux",
        url: "/Javascript/Tableaux",
        lessonsMenu: this.tableauxService.tableauxMenu,
        keywords:['Tableaux','Array']
      },
      {
        name: "Modules",
        url: "/Javascript/ModulesJs",
        lessonsMenu: this.modulesService.modulesJsMenu,
        keywords:['Modules']
      },
      {
        name: "Dom",
        url: "/Javascript/Dom",
        lessonsMenu: this.domService.domMenu,
        keywords:['Dom']
      },
      {
        name: "Evènements",
        url: "/Javascript/Evenements",
        lessonsMenu: this.evenementsService.evenementsMenu,
        keywords:['Evènements','Events']
      },
      {
        name: "Asynchrone",
        url: "/Javascript/Asynchrone",
        lessonsMenu: this.asynchroneService.asynchroneMenu,
        keywords:['Asynchrones']
      },
      {
        name: "Réseau",
        url: "/Javascript/Reseau",
        lessonsMenu: this.reseauService.reseauMenu,
        keywords:['Réseau']
      },
      {
        name: "Date",
        url: "/Javascript/Date",
        lessonsMenu: this.dateService.dateMenu,
        keywords:['Date']
      },
      {
        name: "Location&History",
        url: "/Javascript/LocationAndHistory",
        lessonsMenu: this.locationHistoryService.locationHistoryMenu,
        keywords:['Location','History']
      },
      {
        name: "Classes",
        url: "/Javascript/Classes",
        lessonsMenu: this.classesService.classesMenu,
        keywords:['Classes']
      },
      {
        name: "Gestion d'erreur",
        url: "/Javascript/GestionErreur",
        lessonsMenu: this.gestionErreurService.gestionErreurMenu,
        keywords:['Erreurs','Errors']
      },
      {
        name: "Cookies&LocalStorage",
        url: "/Javascript/Cookies",
        lessonsMenu: this.cookiesService.cookiesMenu,
        keywords:['Cookies','Local storage']
      },
      // { 
      //   name: "Canvas" , 
      //   url: "Javascript/Canvas",
      //   lessonsMenu: this.canvasService.canvasMenu,
      //   keywords:['Canvas']  
      // }
    ];
  }
}
