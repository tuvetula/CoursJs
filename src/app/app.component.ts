import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/services/authService.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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
