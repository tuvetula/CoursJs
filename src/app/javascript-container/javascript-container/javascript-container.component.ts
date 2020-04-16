import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javascript-container',
  templateUrl: './javascript-container.component.html',
  styleUrls: ['./javascript-container.component.css']
})
export class JavascriptContainerComponent implements OnInit {

  constructor(
    private routeService: RouteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeService.currentRoute.next(this.router.url);
  }

}
