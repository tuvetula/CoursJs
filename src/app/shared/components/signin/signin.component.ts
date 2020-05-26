import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../services/authentification.service";
import * as $ from "jquery";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public signinError: string;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  public async signin() {
    if (this.signinForm.valid) {
      try {
        await this.authentificationService.signIn(this.signinForm.value);
        document.getElementById("closeModalSignin").click();
        this.signinError = null;
      } catch (error) {
        this.signinError = error.message;
      }
    } else {
      this.signinError = "Erreur !!!";
    }
  }
}
