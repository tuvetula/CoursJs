import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-input-child',
  templateUrl: './property-input-child.component.html',
  styleUrls: ['./property-input-child.component.css']
})
export class PropertyInputChildComponent implements OnInit {

  @Input() user:{name:string,age:number};

  constructor() { }

  ngOnInit(): void {
  }

}
