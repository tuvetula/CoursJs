import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { tap } from "rxjs/operators";
import { AuthDirectiveService } from 'src/app/shared/services/Menus/Angular/auth-directive.service';
import { Subscription } from 'rxjs';

@Directive({selector: '[ifRole]'})

export class IfRoleDirective implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input("ifRole") role : string;

  constructor( private templateRef : TemplateRef<any>,
               private viewContainer : ViewContainerRef,
               private authService : AuthDirectiveService ) {
  }

  ngOnInit() {
   this.subscription = this.authService.user.pipe(
     tap(() => this.viewContainer.clear()))
    .subscribe(user => {
      if (user.role === this.role) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

