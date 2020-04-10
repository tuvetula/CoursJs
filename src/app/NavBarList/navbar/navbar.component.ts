import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../shared/services/Angular/component.service';
import { DirectiveService } from '../../shared/services/Angular/directive.service';
import { ObservableService } from '../../shared/services/Angular/observable.service';
import { ServicesService } from '../../shared/services/Angular/services.service';
import { RoutingService } from '../../shared/services/Angular/routing.service';
import { FormationService } from '../../shared/services/Angular/formation.service';
import { FormulairesService } from '../../shared/services/Angular/formulaires.service';
import { PipeService } from '../../shared/services/Angular/pipe.service';
import { AngularService } from '../../shared/services/Angular/angular.service';
import { RequetesHttpService } from 'src/app/shared/services/Angular/requetes-http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
