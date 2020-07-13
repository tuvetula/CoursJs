import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentificationService } from "../../../services/Auth/authentification.service";
import { UserCrudService } from "../../../services/User/user-crud.service";
import { StringFunctionsService } from '../../../services/Utilities/String/string-functions.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit,OnDestroy {
  //FormSignup
  public signupForm: FormGroup;
  public showSignupForm: boolean;
  public signupError: string;
  
  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private userCrudService: UserCrudService,
    private stringFunctionsService: StringFunctionsService,
    public activeModal: NgbActiveModal
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
    this.signupForm.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(
      () => {
        if (this.signupError){
          this.signupError = null;
        }
      }
    )
  }

  public async signUp(): Promise<void> {
    if (this.signupForm.valid) {
      if(this.signupForm.value.password === this.signupForm.value.confirmPassword){
        const name = this.stringFunctionsService.capitalizeFirstLetter(this.signupForm.value.completeName.name).trim();
        const firstName = this.stringFunctionsService.capitalizeFirstLetter(this.signupForm.value.completeName.firstName).trim();
        const email = this.signupForm.value.email;
        const password = this.signupForm.value.password;
  
        try {
          const credentials = await this.authentificationService.signUp(email, password , name , firstName)
          try {
            await this.userCrudService.createUser(credentials , name , firstName);
            try {
                await this.authentificationService.logout();
                this.showSignupForm = false;
                this.signupForm.reset();
                if (this.signupError) {
                  this.signupError = null;
                }
                setTimeout(() => {
                 this.activeModal.close();
                  this.showSignupForm = true;
                }, 4000);
    
              } catch (error) {
                console.log('error createUser or logout: ' + error); 
              }
          } catch (error) {
            //L'utilisateur n'a pas été enregistré en bdd, On supprime le compte
            await this.authentificationService.deleteAccount();
            this.signupError = error.message;
          } 
          
          } catch (error) {
          this.signupError = error.message;
        }
      } else {
        this.signupError = "Les 2 mots de passe ne sont pas identiques."
      }
    }
  }
  ngOnDestroy(): void {}
}
