import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../services/Auth/authentification.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  @ViewChild('closeModalSignin') closeModalSignin: ElementRef;
  public signinForm: FormGroup;
  public signinError: string;
  public showSigninForm: boolean;
  public userStatueDisplayName: Observable<string>;

  
  constructor(
    private fb: FormBuilder,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.showSigninForm = true;
    this.userStatueDisplayName = this.authentificationService.userStatue.pipe(
      map((value) => value ? value.displayName : null)
    );
  }

  public signinFormReset(): void {
    this.signinForm.reset();
  }

  public async signin() {
    // console.log('signin');
    if (this.signinForm.valid) {
      this.signinError = null;
      try {
        await this.authentificationService.signIn(this.signinForm.value);
        this.showSigninForm = false;
        setTimeout(() => {
          this.closeModalSignin.nativeElement.click();
          //this.signinError = null;
          this.showSigninForm = true;
          this.signinFormReset();
        }, 3000);
      } catch (error) {
        this.signinError = error.message;
      }
    } else {
      this.signinError = "Erreur !!!";
    }
  }
  public showForgetPasswordModal(){
    this.closeModalSignin.nativeElement.click();
  }
}
