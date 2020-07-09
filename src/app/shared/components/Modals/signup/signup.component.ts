import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentificationService } from "../../../services/Auth/authentification.service";
import { UserCrudService } from "../../../services/User/user-crud.service";
import { StringFunctionsService } from '../../../services/Utilities/String/string-functions.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit,OnDestroy {
  @ViewChild('closeModalSignout') closeModalSignout: ElementRef;
  //FormSignup
  public signupForm: FormGroup;
  public signupError: string;
  public showSignupForm: boolean;
  private valueChangeSubscription: Subscription;
  
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
    this.valueChangeSubscription = this.signupForm.valueChanges.subscribe(
      value => {
        if (this.signupError){
          this.signupError = null;
        }
      }
    )
  }

  public signupFormReset(): void{
    this.signupForm.reset();
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
              await this.authentificationService.logout();
              this.showSignupForm = false;
              this.signupForm.reset();
              if (this.signupError) {
                this.signupError = null;
              }
              setTimeout(() => {
                if (this.closeModalSignout.nativeElement) {
                  this.closeModalSignout.nativeElement.click();
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
        this.signupError = "Les 2 mots de passe ne sont pas identiques."
      }
    }
  }
  ngOnDestroy(): void {
    this.valueChangeSubscription.unsubscribe();
  }
}
