import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/authService.service';
import { tap } from "rxjs/operators";

@Directive({selector: '[ifRole]'})

export class IfRole implements OnInit, OnDestroy {
  
  subscription;
  
  @Input("ifRole") role : string;

  constructor( private templateRef : TemplateRef<any>,
               private viewContainer : ViewContainerRef,
               private authService : AuthService ) {
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