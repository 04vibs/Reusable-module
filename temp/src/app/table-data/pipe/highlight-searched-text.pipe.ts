import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearchedText'
})
export class HighlightSearchedTextPipe implements PipeTransform {

  transform(items: any[], SearchText?: any, cssClass?: any): any {
    if (items == null) {
      return [];
    }
    if (!SearchText) {
      return items;
    }

    SearchText = SearchText.toLowerCase();
    return items.filter( item => {
      return this.highlight(Object.values(item), SearchText, cssClass);

    });
  }

  highlight(values, str, cssClass) {
    return values.map(function(value) {

     return  String(value).toLowerCase() ;
    }).find( (value) => {
      const re = new RegExp(str, 'gi');
      console.log(value);
      const match = value.match(re);
      console.log(match);
   //   return value ? value.replace(re, '<span class=cssClass>' + {value} + '</span>') : value;
      let ar ;
       if ( value.includes(str)) {
         console.log(value);
         console.log(str);
         ar = value;
         return this.textHighlight(ar, str, cssClass);
        }


    });
  }

  textHighlight(searchwords: any, text: any, cssClass) {
    console.log(searchwords);
    console.log(text);
  //  let newStr;
    let TextArray = searchwords;
     console.log(TextArray);
    if (TextArray.length && text) {

    //   TextArray.forEach((searchWord: string) => {
    //     text = text.replace(searchWord, (match) => `<span class="highlight">${match}</span>`);
    //   });
    // }
    // return text;


     for ( let i = 0 ; i < TextArray.length ; i++) {

       if (TextArray[i] === text) {
      //   const c  = document.getElementById('p');
     //  console.log(c);
         const startIndex = TextArray.toLowerCase().indexOf(text.toLowerCase());
         if (startIndex !== -1) {
          const endLength = text.length;
          const matchingString = TextArray.substr(startIndex, endLength);
       //   TextArray[i] = '<span class="highlight">' + TextArray[i] + '</span>';
      // newStr = TextArray.replace(matchingString, '<span class="highlight">' + TextArray[i] + '</span>');
       TextArray = TextArray.replace(matchingString, (match) => '<span class="highlight">' + TextArray[i] + '</span>');
        //  TextArray = TextArray.replace(matchingString, ' <span dangerouslySetInnerHTML={{_html:`<b>${matchingString}</b>`}}></span>');
          console.log(TextArray);
          return TextArray;
        }
      //   TextArray.find(text , (TextArray[i])).replace(TextArray[i], '<span class="highlight">' + TextArray[i] + '</span>');
     //  TextArray[i] = '<span class="highlight">' + TextArray[i] + '</span>';
// if (TextArray.length && text) {
  // TextArray.forEach((searchWord: string) => {
  //   text = text.replace(searchWord, (match) => `<span class="highlightText">${match}</span>`);
  // });

 // return TextArray;
      // console.log(TextArray[i]);
       // return TextArray;
      }
    }
  }
}
}
