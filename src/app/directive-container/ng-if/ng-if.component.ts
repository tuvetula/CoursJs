import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public displayButton: boolean = false;
  public nameButton: string = "Voir";

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    this.displayButton = !this.displayButton;
    this.displayButton ? this.nameButton = "Cacher" : this.nameButton = "Voir";
  }

}
