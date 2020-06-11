import { Component, OnInit} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppliService } from "../../services/Menus/appli.service";

@Component({
  selector: "app-title-page",
  templateUrl: "./title-page.component.html",
  styleUrls: ["./title-page.component.css"],
})
export class TitlePageComponent implements OnInit {
  public title$: BehaviorSubject<string>;

  constructor(private appliService: AppliService) {}

  ngOnInit(): void {
    this.title$ = this.appliService.title;   
  }
  
}
