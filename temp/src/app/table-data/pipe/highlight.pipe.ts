import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(data: any[], searchText?: any , cssClass?: any): any {

    if (data == null ) {
      return [];
    }
    if (searchText == null) {
      return data;
    }
    if (data !== null && searchText !== null) {
      searchText = searchText.toLowerCase();
      console.log(data);
      console.log(searchText);

       data.filter((item) => {
         this.highlight(Object.values(item), searchText, cssClass);
       });
    }
  }

  highlight(datavalue, searchText, cssClass) {
    console.log(datavalue);
    if (datavalue.length && searchText) {
      datavalue.forEach((searchword) => {
        console.log(searchword);
        console.log(searchText);
        for ( let i = 0 ; i < searchword.length; i++ ) {
          if (searchword[i].toLowerCase() === searchText) {
            const startIndex = searchword.toLowerCase().indexOf(searchText.toLowerCase());
            if (startIndex !== -1) {
             const endLength = searchText.length;
             const matchingString = searchword.substr(startIndex, endLength);
           // searchword[i] = '<span class="highlight">' + searchword[i] + '</span>';
            searchword = searchword.replace(matchingString, (match) => '<span class="highlight">' + searchword[i] + '</span>');
            console.log(searchword);
            return searchword;
          }
        }
      }});
    }
  }

}
