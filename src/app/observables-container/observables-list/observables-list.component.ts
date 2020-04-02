import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/shared/services/observable.service';

@Component({
  selector: 'app-observables-list',
  templateUrl: './observables-list.component.html',
  styleUrls: ['./observables-list.component.css']
})
export class ObservablesListComponent implements OnInit {

  public observableMenu: {name: string , url: string}[];

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
    this.observableMenu = this.observableService.observableMenu;
  }

}
