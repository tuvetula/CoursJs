import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AngularService } from 'src/app/shared/services/Angular/angular.service';
import { AnimationsService } from 'src/app/shared/services/Angular/animations.service';

@Component({
  selector: 'app-animations-container',
  templateUrl: './animations-container.component.html',
  styleUrls: ['./animations-container.component.css']
})
export class AnimationsContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private animationsService: AnimationsService,
    private angularService: AngularService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.animationsService.animationsMenu);
    this.angularService.title.next('Animations');
  }

}
