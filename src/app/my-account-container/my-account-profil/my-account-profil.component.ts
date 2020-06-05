import { Component, OnInit, OnDestroy } from "@angular/core";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { Subscription } from "rxjs";
import { CurrentUserModel } from "src/app/shared/models/User/current-user.model";

@Component({
  selector: "app-my-account-profil",
  templateUrl: "./my-account-profil.component.html",
  styleUrls: ["./my-account-profil.component.css"],
})
export class MyAccountProfilComponent implements OnInit, OnDestroy {
  public source: string = "myAccount";
  private currentUserSubscription: Subscription;
  public currentUser: CurrentUserModel;
  public profilPictureUrl: string;

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUser.subscribe(
      (currentUser: CurrentUserModel) => {
        this.currentUser = currentUser;
      }
    );
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
