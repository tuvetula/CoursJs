import { Directive, HostListener } from '@angular/core';
import { DocumentBlurService } from '../../services/Utilities/document-blur.service';

@Directive({
  selector: '[appSearchBarResultsLink]'
})
export class SearchBarResultsLinkDirective {
  @HostListener('blur',['$event.target'])
  onBlur(target: any): void {
    this.documentBlurService.documentBlurTarget.next(target);
  }

  constructor(
    private documentBlurService: DocumentBlurService
  ) { }

}
