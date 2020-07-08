import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/Auth/authentification.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  @ViewChild('closeforgetPasswordModal') closeforgetPasswordModal: ElementRef;

  public forgetPasswordForm: FormGroup;
  public showForgetPasswordForm: boolean;
  public forgetPasswordErrorMessage: string;
  public forgetPasswordSuccessMessage: string;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
    this.showForgetPasswordForm = true;
  }

  public forgetPasswordFormReset(): void {
    this.forgetPasswordForm.reset();
  }

  public async resetPassword() {
    if (this.forgetPasswordForm.valid) {
      this.forgetPasswordErrorMessage = null;
      try {
        const email = this.forgetPasswordForm.value.email;
        await this.authentificationService.sendPasswordResetEmail(email);
        this.forgetPasswordSuccessMessage = "Vous allez recevoir un email vous permettant de réinitialiser votre mot de passe."
        this.showForgetPasswordForm = false;
        setTimeout(() => {
          this.closeforgetPasswordModal.nativeElement.click()
          this.showForgetPasswordForm = true;
          this.forgetPasswordFormReset();
          this.forgetPasswordSuccessMessage = null;
        }, 5000);
      } catch (error) {
        this.forgetPasswordErrorMessage = error.message;
      }
    } else {
      this.forgetPasswordErrorMessage = "Erreur !!!";
    }
  }
}
