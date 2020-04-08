import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public nom: string = 'Angular';
  public name: string[] = ['Romain' , 'Lenny' , 'Roxane'];

  constructor() {
   }

  ngOnInit(): void {
  }

  getName(index: number): string {
    return this.name[index];
  }

}
