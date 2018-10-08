import { inject } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlight'
})
export class SearchHighlightPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args == null) {
      return value;
    }
    if (value != null && args != null) {
      value.filter((item) => {
        this.highlight(Object.values(item), args);
      });
    }
  }

  highlight(values, searchText) {
       return values.map((item) => {
      return String(item).toLowerCase();
    }).find((item) => {
      const  re = new RegExp(searchText, 'gi');
      console.log(item);
      console.log(re);

      console.log(item.replace(re, 'abc'));
      if (item.includes(searchText)) {
      let item1 = item.replace(re, '<span class="highlight">' + searchText + '</span>');
      item = item1;
      console.log(item);
     }
      // if ( item.includes(searchText)) {
      //   const arr: string = item;
      //   console.log(arr);
      //     for ( let i = 0 ; i < arr.length; i++) {
      //     const startindex =  arr.indexOf(searchText);
      //     if ( startindex >= 0) {
      //      const a =  arr.substring(0, startindex) + '<span class ="highlight">' +
      //        arr.substring(startindex + searchText.length ) + '</span>'  ;
      //        console.log(a);
      //        return a;
      //     }
      //   }
      // }
    });
  }
}
