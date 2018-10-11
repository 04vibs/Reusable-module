import { Directive, HostListener, Host, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() data;
  @Input() searchText;

  @HostListener('') onFocus() {
    console.log('on focus');
  }
  constructor() { }

}
