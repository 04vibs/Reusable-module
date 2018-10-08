import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doc'
})
export class DocPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == null) {
      return value;
    }
    if (value != null && args != null) {
      return value.filter((item) => {
        return this.highlight(Object.values(item), args);
      });
    }
  }

  highlight(values, searchText) {
    console.log(values);
    values.map( (item) => {

        return this.IndexHighlight(item , searchText);
    });
  }

  IndexHighlight(item, searchText) {
    console.log(item);
    let data = String(item).toLowerCase();
    if (data.includes(searchText)) {
      return this.abc(data);
    }
  }

   abc(item) {
     let inputText;
      inputText = document.getElementById('text');
    console.log(inputText);
    // debugger;
    let innerHTML = inputText.innerHTML;
    let index = item.indexOf(inputText);
    if (index >= 0) {

     innerHTML = item.substring(0, index) +
         '<span class="highlight">' + item.substring(index, index + inputText.length) +
          '</span>' + item.substring(index + inputText.length);
     item = innerHTML;
     console.log(item);
     return item;
    }
  }
}
