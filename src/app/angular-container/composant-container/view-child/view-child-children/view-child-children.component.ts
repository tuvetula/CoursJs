import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-children',
  templateUrl: './view-child-children.component.html',
  styleUrls: ['./view-child-children.component.css']
})
export class ViewChildChildrenComponent implements OnInit {
  public compteurValue: number;
  constructor() { }

  ngOnInit(): void {
    this.compteurValue = 0;
  }
  add(): void {
    this.compteurValue += 1;
  }
  remove(): void {
    this.compteurValue -= 1;
  }
}
