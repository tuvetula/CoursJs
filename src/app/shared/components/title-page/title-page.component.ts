import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AppliService } from "../../services/Menus/appli.service";

@Component({
  selector: "app-title-page",
  templateUrl: "./title-page.component.html",
  styleUrls: ["./title-page.component.css"],
})
export class TitlePageComponent implements OnInit, OnDestroy {
  public titleSubscription: Subscription;
  public title: string;

  constructor(private appliService: AppliService) {}

  ngOnInit(): void {
    this.titleSubscription = this.appliService.title.subscribe(
      (title) => (this.title = title)
    );
  }
  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
