import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit{
  @Input() value: boolean[];
  @Input() index: string = ""; 
  @Output() changed = new EventEmitter<HTMLInputElement>();

  public id: string = "toggle-button-checkbox";

  constructor() { }

  ngOnInit(): void {
    this.id += this.index;
  }
  public change(target: HTMLInputElement){
    this.changed.emit(target);    
  }
}
