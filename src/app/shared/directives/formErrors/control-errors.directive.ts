import {
  Directive,
  Optional,
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
import { ErrorsService } from "../../services/Utilities/errors/errors.service";
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
    private errorsService: ErrorsService,
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
        if (controlErrors) {
          //On récupère la nom de la première clé de l'objet controlErrors
          const firstKey = Object.keys(controlErrors)[0];
          // On stocke la fonction qui est la valeur de la propriété "firstKey" de l'objet defaultErrors
          const getError = this.errorsService.defaultErrors[firstKey];
          //On stocke le text qui est le résultat de la fonction getError
          const text =
            this.customErrors[firstKey] || getError(controlErrors[firstKey]);
          //On paramètre le text à envoyer au composant pour l'afficher
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
