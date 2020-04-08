import { Component, OnInit, Input } from '@angular/core';
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: 'app-sous-menu',
  templateUrl: './sous-menu.component.html',
  styleUrls: ['./sous-menu.component.css']
})
export class SousMenuComponent implements OnInit {
  @Input() public menu: {name:string , url:string}[];


  constructor() { }

  ngOnInit(): void {
  }

}
