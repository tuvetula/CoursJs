import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit-items',
  templateUrl: './fruit-items.component.html',
  styleUrls: ['./fruit-items.component.css']
})
export class FruitItemsComponent implements OnInit {
  @Input() public fruit: string;
  @Output() public deleteF: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteFruit(){
    this.deleteF.emit(this.fruit);
  }
}
