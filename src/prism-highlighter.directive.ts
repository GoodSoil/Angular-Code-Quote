import {Directive, ElementRef, OnInit} from '@angular/core';

declare var Prism: any;
import 'prismjs/prism';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Directive({
    selector: '[pLight]'
})
export class PrismHighlighter {
  constructor(protected el: ElementRef) {}
  
  ngAfterViewInit() {
    Prism.highlightElement(this.el.nativeElement);
  }
}