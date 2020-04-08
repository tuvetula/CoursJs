import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-of-components',
  templateUrl: './life-cycle-of-components.component.html',
  styleUrls: ['./life-cycle-of-components.component.css']
})
export class LifeCycleOfComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
