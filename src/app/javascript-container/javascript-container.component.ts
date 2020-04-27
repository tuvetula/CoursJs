import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from "@angular/core";
import { AppliService } from "../shared/services/appli.service";
import { ListMenuLeftService } from '../shared/services/list-menu-left.service';
import { JavascriptService } from '../shared/services/Javascript/javascript.service';
import { MenuModel } from '../shared/models/menu.model';
import { BasesService } from '../shared/services/Javascript/bases.service';

@Component({
  selector: "app-javascript-container",
  templateUrl: "./javascript-container.component.html",
  styleUrls: ["./javascript-container.component.css"],
  providers: [
    BasesService
  ]
})
export class JavascriptContainerComponent implements OnInit, OnDestroy, AfterViewChecked {
  public nameSection: string = "Javascript";
  public menu: MenuModel[] = [];

  constructor(private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private cdRef: ChangeDetectorRef,
    private javascriptService: JavascriptService
    ) {}

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.nameSection);
     //Récupération et modification menu pour sousMenu
     this.modifyJavascriptMenuUrl();
    //On paramètre le titre de la page
    this.appliService.title.next(this.nameSection);
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.listMenuLeftService.listMenu.next([]);
  }
  public titleIsJavascript() {
    return this.appliService.title.value === this.nameSection;
  }
  private modifyJavascriptMenuUrl(): void {
    this.javascriptService.javascriptMenu.slice().forEach((element) => {
      this.menu.push({ name: element.name, url: element.url });
    });
    this.menu.forEach(
      (element) =>
        (element.url = element.url.slice(element.url.lastIndexOf("/") + 1))
    );
  }
}
