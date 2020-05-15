import { Component, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/shared/services/Javascript/canvas.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-canvas-container',
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.css'],
  providers: [CanvasService]
})
export class CanvasContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private canvasService: CanvasService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.canvasService.canvasMenu);
    this.appliService.title.next('Canvas');
  }

}
