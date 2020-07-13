import { Component, OnInit, OnDestroy } from "@angular/core";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { Subscription } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAccountModalComponent } from 'src/app/shared/components/Modals/delete-account-modal/delete-account-modal.component';
import { UserFirestoreModel } from 'src/app/shared/models/User/current-user.model';

@Component({
  selector: "app-my-account-profil",
  templateUrl: "./my-account-profil.component.html",
  styleUrls: ["./my-account-profil.component.css"],
})
export class MyAccountProfilComponent implements OnInit, OnDestroy {
  public source: string = "myAccount";
  private currentUserSubscription: Subscription;
  public currentUser: UserFirestoreModel;
  public profilPictureUrl: string;

  constructor(
    private currentUserService: CurrentUserService,
    private modalService: NgbModal,
    ) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.currentUserService.currentUser.subscribe(
      (currentUser: UserFirestoreModel) => {
        this.currentUser = currentUser;
      }
    );
  }
  public deleteAccount():void{
    this.modalService.open(DeleteAccountModalComponent,{centered:true});
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
