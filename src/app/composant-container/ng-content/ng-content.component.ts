import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {
  public names: string[];

  constructor() { }

  ngOnInit(): void {
    this.names = [
      "Lenny","Barbara","Roxane","Rundee","Tuvetula"
    ];
  }

}
