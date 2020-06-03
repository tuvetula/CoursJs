import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../services/User/authentification.service";
import { UserStatueModel } from '../../models/User/userStatue.model';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public signinError: string;
  public showSigninForm: boolean;
  @Input() userStatue: UserStatueModel;

  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.showSigninForm = true;
  }
  public signinFormReset(): void{
    this.signinForm.reset();
  }
  
  public async signin() {
    if (this.signinForm.valid) {
      this.signinError = null;
      try {
        await this.authentificationService.signIn(this.signinForm.value);
        this.showSigninForm = false;
        setTimeout(() => {
          const buttonCloseModal = document.getElementById("closeModalSignin");
          if(buttonCloseModal){
            buttonCloseModal.click();
          }
          this.signinError = null;
          this.showSigninForm = true;
          this.signinFormReset();
        },3000);
      } catch (error) {
        this.signinError = error.message;
      }
    } else {
      this.signinError = "Erreur !!!";
    }
  }
}
