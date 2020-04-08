import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-formulaires-exemple",
  templateUrl: "./formulaires-exemple.component.html",
  styleUrls: ["./formulaires-exemple.component.css"],
})
export class FormulairesExempleComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userName: '',
      email: ['' , [Validators.required, Validators.email]],
      hobbies: this.fb.array([['test'],this.fb.control('',Validators.minLength(3))]),
      password: '',
      confirmPassword: ''
    })
    
    this.myForm.valueChanges.subscribe(
      values => console.log('Valeurs de myForm: ' + values)
    )
    this.myForm.statusChanges.subscribe(
      status => console.log('Nouveau statut de myForm: ' + status)
    )
  }

  public get hobbies(): FormArray {
    return <FormArray>this.myForm.get("hobbies");
  }

  public addHobby(): void {
    this.hobbies.push(new FormControl(""));
  }

  public deleteHobby(index: number): void {
    this.hobbies.removeAt(index);
  }

  public submit(): void {
    this.myForm.reset();
  }
}


