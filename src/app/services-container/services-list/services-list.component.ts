import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  public servicesMenu: {name:string , url:string}[]

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesMenu = this.servicesService.serviceMenu;
  }
}
