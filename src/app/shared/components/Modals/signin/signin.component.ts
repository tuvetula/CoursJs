import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../../services/Auth/authentification.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { untilDestroyed } from "@orchestrator/ngx-until-destroyed";
import { ForgetPasswordModalComponent } from "../forget-password-modal/forget-password-modal.component";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit, OnDestroy {
  public signinForm: FormGroup;
  public showSigninForm: boolean;
  public signinError: string = null;
  public userStatueDisplayName: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.showSigninForm = true;
    this.userStatueDisplayName = this.authentificationService.userStatue.pipe(
      map((value) => (value ? value.displayName : null))
    );
    this.signinForm.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      if (this.signinError) {
        this.signinError = null;
      }
    });
  }

  public async signin() {
    if (this.signinForm.valid) {
      this.signinError = null;
      try {
        await this.authentificationService.signIn(this.signinForm.value);
        this.showSigninForm = false;
        setTimeout(() => {
          this.activeModal.close();
          this.showSigninForm = true;
          this.signinError = null;
        }, 3000);
      } catch (error) {
        this.signinError = error.message;
      }
    }
  }
  public showForgetPasswordModal() {
    this.activeModal.close();
    this.modalService.open(ForgetPasswordModalComponent, { centered: true });
  }
  ngOnDestroy(): void {}
}
