import {
  Directive,
  HostBinding,
  OnInit,
  ElementRef,
  AfterContentInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appCodeFormat]",
})
export class CodeFormatDirective implements AfterContentInit {
  @HostBinding("style.fontWeight") private fontWeight: string;
  @HostBinding("style.fontFamily") private fontFamily: string;
  @HostBinding("style.fontSize") private fontSize: string;

  private keywordWords: string[] = [
    "const",
    "new",
    "import",
    "from",
    "export",
    "class",
    "constructor",
    "public",
    "private",
  ];
  private functionWords: string[] = [
    "@NgModule",
    "pipe",
    "subscribe",
    "map",
    "tap",
    "filter",
    "next",
    "log",
  ];

  constructor(private el: ElementRef, private render: Renderer2) {
    this.fontWeight = "bold";
    this.fontFamily = "monospace";
    this.fontSize = "1.2em";
  }

  ngAfterContentInit(): void {
    let newInnerHtmlToSend: string = this.el.nativeElement.innerHTML;
    newInnerHtmlToSend = this.changeInnerHtml(
      this.keywordWords,
      newInnerHtmlToSend,
      "blue"
    );
    newInnerHtmlToSend = this.changeInnerHtml(
      this.functionWords,
      newInnerHtmlToSend,
      "red"
    );      
  }

  private changeInnerHtml(
    array: string[],
    innerHtml: string,
    color: string
  ): string {
    let newInnerHtml: string = innerHtml;
    array.forEach((element) => {
      let regex = new RegExp(element, "g");
      let elementText: string = newInnerHtml;
      if (elementText.includes(element)) {
        newInnerHtml = elementText.replace(regex, element.fontcolor(color));
      }
    });
    return newInnerHtml;
  }
}
