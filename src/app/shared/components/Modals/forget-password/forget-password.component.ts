import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../../services/Auth/authentification.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SigninModalComponent } from "../signin-modal/signin-modal.component";
import { untilDestroyed } from "@orchestrator/ngx-until-destroyed";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"],
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  public forgetPasswordForm: FormGroup;
  public showForgetPasswordForm: boolean;
  public forgetPasswordErrorMessage: string = null;
  public forgetPasswordSuccessMessage: string;

  public userMail: string;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.authentificationService.getCurrentUser().then(user => {
      this.userMail = user ? user.email : null;
    })
    .catch(error => {
      console.log(error);
      this.userMail = null;
    });
    this.forgetPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
    this.showForgetPasswordForm = true;
    this.forgetPasswordForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        if (this.forgetPasswordErrorMessage) {
          this.forgetPasswordErrorMessage = null;
        }
      });
  }

  public async resetPassword() {
    if (this.forgetPasswordForm.valid) {
      this.forgetPasswordErrorMessage = null;
      try {
        const email = this.forgetPasswordForm.value.email;
        await this.authentificationService.sendPasswordResetEmail(email);
        this.forgetPasswordSuccessMessage =
          "Vous allez recevoir un email vous permettant de réinitialiser votre mot de passe.";
        this.showForgetPasswordForm = false;
        setTimeout(() => {
          this.activeModal.close();
          this.forgetPasswordSuccessMessage = null;
        }, 4000);
      } catch (error) {
        this.forgetPasswordErrorMessage = error.message;
      }
    }
  }
  public showSigninModal(): void {
    this.activeModal.close();
    this.modalService.open(SigninModalComponent, { centered: true });
  }
  ngOnDestroy(): void {}
}
