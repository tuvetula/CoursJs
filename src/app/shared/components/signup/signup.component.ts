import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentificationService } from "../../services/authentification.service";
import { UserCrudService } from "../../services/user-crud.service";
import { StringFunctions } from '../../services/string-functions.service';

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
    private authentificationService: AuthentificationService,
    private userCrudService: UserCrudService,
    private stringFunctions: StringFunctions
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
  public async signUp(): Promise<void> {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password === this.signupForm.value.confirmPassword
    ) {
      const name = this.stringFunctions.capitalizeFirstLetter(this.signupForm.value.completeName.name).trim();
      const firstName = this.stringFunctions.capitalizeFirstLetter(this.signupForm.value.completeName.firstName).trim();
      const email = this.signupForm.value.email;
      const password = this.signupForm.value.password;

      try {
        const credentials = await this.authentificationService.signUp(email, password , name , firstName)
         try {
            await this.userCrudService.createUser(credentials , name , firstName);
            await this.authentificationService.logout();
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

          } catch (error) {
            console.log('error createUser or logout: ' + error); 
          }
        } catch (error) {
        this.signupError = error.message;
      }
    } else {
      console.log(this.signupForm);
      this.signupError = "Erreur, veuillez vérifier !!!";
    }
  }
}
