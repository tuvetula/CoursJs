import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/Menus/Angular/panier.service';

@Component({
  selector: 'app-services-utilisation',
  templateUrl: './services-utilisation.component.html',
  styleUrls: ['./services-utilisation.component.css'],
  providers: [PanierService]
})
export class ServicesUtilisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
