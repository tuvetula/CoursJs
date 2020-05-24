import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentificationService } from "../../services/authentification.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  //FormSignup
  public signupForm: FormGroup;
  public signupError: string;

  public showSignupForm: boolean;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      completeName: this.fb.group({
        name: ["", [Validators.required, Validators.minLength(2)]],
        firstName: ["", [Validators.required, Validators.minLength(2)]],
      }),
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.showSignupForm = true;
  }
  public signUp(): void {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password === this.signupForm.value.confirmPassword
    ) {
      this.authentificationService
        .signUp(this.signupForm.value)
        .then(() => {
          this.showSignupForm = false;
          this.signupForm.reset();
          if (this.signupError) {
            this.signupError = null;
          }
          setTimeout(() => {
            if (document.getElementById("closeModalSignout")) {
              document.getElementById("closeModalSignout").click();
            }
            this.showSignupForm = true;
          }, 5000);
        })
        .catch((err) => {
          this.signupError = err.message;
        });
    } else {
      console.log(this.signupForm);
      this.signupError = "Erreur, veuillez vérifier !!!";
    }
  }
}
