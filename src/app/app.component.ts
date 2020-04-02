import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { AuthService } from "./shared/services/authService.service";
import { PanierService } from "./shared/services/panier.service";
import {
  Observable,
  Observer,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject
} from "rxjs";
import { map, filter } from "rxjs/operators";
import { UserModel } from './shared/models/user.model';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PanierService]
})
export class AppComponent implements OnInit {
  nom: string;
  public text: string = "purple";
  public background: string;
  public secondBackground: string = "gray";

  constructor(private authService: AuthService) {
    this.nom = "Angular";
    
  }
  ngOnInit() {}
}
