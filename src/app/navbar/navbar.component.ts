import { Component, OnInit } from '@angular/core';
import { DataBindingService } from '../shared/services/data-binding.service';
import { DirectiveService } from '../shared/services/directive.service';
import { ObservableService } from '../shared/services/observable.service';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public componentMenu: {name:string , url:string}[];
  public directiveMenu: {name:string , url:string}[];
  public observableMenu: {name:string , url:string}[];
  public serviceMenu: {name:string , url:string}[];

  constructor(private dataBindingService: DataBindingService,
    private directiveService: DirectiveService,
    private observableService: ObservableService,
    private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.componentMenu = this.dataBindingService.componentMenu;
    this.directiveMenu = this.directiveService.directiveMenu;
    this.observableMenu = this.observableService.observableMenu;
    this.serviceMenu = this.servicesService.serviceMenu;
  }

}
