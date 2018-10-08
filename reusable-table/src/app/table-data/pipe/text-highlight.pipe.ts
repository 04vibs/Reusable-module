import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight'
})
export class TextHighlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value ||  !args) {
      return value;
    }

    value = value.toString();
    let re = new RegExp(args, 'gi');
    return value.replace(re, '<span class="highlight">' + args + '</span>');

  }

}
