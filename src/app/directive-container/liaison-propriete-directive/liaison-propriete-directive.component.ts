import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-propriete-directive',
  templateUrl: './liaison-propriete-directive.component.html',
  styleUrls: ['./liaison-propriete-directive.component.css']
})
export class LiaisonProprieteDirectiveComponent implements OnInit {
  public color: string = 'purple';
  constructor() { }
  ngOnInit(): void {}
}
