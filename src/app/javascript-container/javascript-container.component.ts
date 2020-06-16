import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from "@angular/core";
import { AppliService } from "../shared/services/Menus/appli.service";
import { LessonsMenuService } from '../shared/services/Menus/lessons-menu.service';

@Component({
  selector: "app-javascript-container",
  templateUrl: "./javascript-container.component.html",
  styleUrls: ["./javascript-container.component.css"],
})
export class JavascriptContainerComponent implements OnInit, OnDestroy, AfterViewChecked {
  public nameSection: string = "Javascript";

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private cdRef: ChangeDetectorRef,
    ) {}

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenuName.next(this.nameSection);
    //On paramètre le titre de la page
    this.appliService.title.next(this.nameSection);
    // this.listMenuLeftService.listMenu.next([]);
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }
  //Fonction verification si titre dans le service est equivalent à celui du component
  public titleIsJavascript() {
    return this.appliService.title.value === this.nameSection;
  }
}
