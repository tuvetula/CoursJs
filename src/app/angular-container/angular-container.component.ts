import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectorRef,
} from "@angular/core";
import { LessonsMenuService } from "../shared/services/Menus/lessons-menu.service";
import { AppliService } from "../shared/services/Menus/appli.service";

@Component({
  selector: "app-angular-container",
  templateUrl: "./angular-container.component.html",
  styleUrls: ["./angular-container.component.css"]
})
export class AngularContainerComponent
  implements OnInit, OnDestroy, AfterViewChecked {
  private nameSection: string = "Angular";

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.nameSection);
    //Configuration title
    this.appliService.title.next(this.nameSection);
  }

  ngAfterViewChecked(): void {
    //Evite d'afficher erreur dans la console lors de la verif titleIsAngular()
    this.cdRef.detectChanges();
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }

  public titleIsAngular() {
    return this.appliService.title.value === this.nameSection;
  }
  
}
