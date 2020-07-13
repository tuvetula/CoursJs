import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { untilDestroyed } from "@orchestrator/ngx-until-destroyed";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { take, map } from "rxjs/operators";
import { AuthentificationService } from "src/app/shared/services/Auth/authentification.service";
import { AuthFormModel } from "src/app/shared/models/Forms/authFormValues.model";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ForgetPasswordModalComponent } from '../forget-password-modal/forget-password-modal.component';

@Component({
  selector: "app-delete-account",
  templateUrl: "./delete-account.component.html",
  styleUrls: ["./delete-account.component.css"],
})
export class DeleteAccountComponent implements OnInit, OnDestroy {
  public deleteAccountForm: FormGroup;
  public showDeleteAccountForm: boolean;
  public deleteAccountErrorMessage: string;
  public deleteAccountSuccessMessage: string;
  public currentUserMail: string;

  constructor(
    private fb: FormBuilder,
    private currentUserService: CurrentUserService,
    private authenticationService: AuthentificationService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deleteAccountForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.showDeleteAccountForm = true;
    this.deleteAccountForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        if (this.deleteAccountErrorMessage) {
          this.deleteAccountErrorMessage = null;
        }
      });
    this.currentUserService.currentUser
      .pipe(
        take(1),
        map((currentUser) => currentUser.email)
      )
      .subscribe((currentUserMail: string) => {
        this.currentUserMail = currentUserMail;
      });
  }

  public async deleteAccount(): Promise<void> {
    const obj: AuthFormModel = {
      password: this.deleteAccountForm.value.password,
      email: this.currentUserMail,
    };
    try {
      await this.authenticationService.signIn(obj);
      await this.authenticationService.deleteAccount();
      if (this.deleteAccountErrorMessage) {
        this.deleteAccountErrorMessage = null;
      }
      this.showDeleteAccountForm = false;
      this.deleteAccountSuccessMessage = `Votre compte a bien été supprimé.
      Vous allez être déconnecté.`;
      setTimeout(() => {
        this.activeModal.close();
        this.router.navigate(['/']);
        this.showDeleteAccountForm = true;
        this.deleteAccountSuccessMessage = null;
      }, 3000);
    } catch (error) {
      this.deleteAccountErrorMessage = error.message;
    }
  }

  public showForgetPasswordModal() {
    this.activeModal.close();
    this.modalService.open(ForgetPasswordModalComponent, { centered: true });
  }

  ngOnDestroy(): void {}
}
