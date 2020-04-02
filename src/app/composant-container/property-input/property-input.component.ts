import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-input',
  templateUrl: './property-input.component.html',
  styleUrls: ['./property-input.component.css']
})
export class PropertyInputComponent implements OnInit {
  public user: {name:string , age:number};

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: "Lenny",
      age: 4
    }
  }

}
