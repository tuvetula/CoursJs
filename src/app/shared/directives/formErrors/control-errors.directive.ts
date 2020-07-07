import {
  Directive,
  Optional,
  Inject,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  Host,
} from "@angular/core";
import { NgControl, ControlContainer } from "@angular/forms";
import { ControlErrorContainerDirective } from "./control-error-container.directive";
import { merge, EMPTY, Observable } from "rxjs";
import { untilDestroyed } from "@orchestrator/ngx-until-destroyed";
import { ControlErrorComponent } from "../../components/control-error/control-error.component";
import { FORM_ERRORS } from "../../services/Utilities/errors/errors.service";
import { FormSubmitDirective } from "./form-submit.directive";

@Directive({
  selector: "[formControl], [formControlName]",
})

export class ControlErrorsDirective {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  get control() {
    return this.controlDir.control;
  }

  ngOnInit() {
    merge(this.submit$, this.control.valueChanges)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        const controlErrors = this.control.errors;
        console.log(controlErrors);
        
        if (controlErrors) {
          //On récupère la première clé de l'objet controlErrors
          const firstKey = Object.keys(controlErrors)[0];
          console.log(firstKey);
          const getError = this.errors[firstKey];
          const text =
            this.customErrors[firstKey] || getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      });
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(
        ControlErrorComponent
      );
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy() {}
}
