import { Component, OnInit, HostListener } from '@angular/core';
import { Event } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
