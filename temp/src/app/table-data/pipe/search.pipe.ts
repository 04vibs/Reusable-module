import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

      if (!items) {
        return [];
      }
      if (!searchText) {
        return items;
      }
      searchText = searchText.toLowerCase();
      return items.filter( item => {
        return this.includesStr(Object.values(item), searchText);

      });

  }

   includesStr(values, str) {
    return values.map(function (value) {
     return String(value).toLowerCase();
   }).find(function (value) {
     return value.includes(str);
   });
 }

}
