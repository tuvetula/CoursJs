import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appNgIfCustom]'
})
export class NgIfCustom {


    @Input() set appNgIfCustom(condition: boolean){
        if(condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainerRef.clear;
        }
    }
    constructor(private templateRef: TemplateRef<any> , private viewContainerRef: ViewContainerRef){}
}