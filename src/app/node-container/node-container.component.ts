import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { LessonsMenuService } from '../shared/services/Menus/lessons-menu.service';
import { AppliService } from '../shared/services/Menus/appli.service';

@Component({
  selector: 'app-node-container',
  templateUrl: './node-container.component.html',
  styleUrls: ['./node-container.component.css'],
})
export class NodeContainerComponent implements OnInit,OnDestroy,AfterViewChecked {
  private nameSection: string = "Node";
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenuName.next(this.nameSection);
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

  public titleIsNode() {
    return this.appliService.title.value === this.nameSection;
  }

}
