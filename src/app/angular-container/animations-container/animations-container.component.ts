import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AnimationsService } from 'src/app/shared/services/Angular/animations.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-animations-container',
  templateUrl: './animations-container.component.html',
  styleUrls: ['./animations-container.component.css']
})
export class AnimationsContainerComponent implements OnInit {
  private componentName: string = "Composants"
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private animationsService: AnimationsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.animationsService.animationsMenu);
    this.appliService.title.next(this.componentName);
  }

}
