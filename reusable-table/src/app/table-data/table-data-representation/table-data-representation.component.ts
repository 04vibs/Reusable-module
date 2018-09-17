import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-table-data-representation',
  templateUrl: './table-data-representation.component.html',
  styleUrls: ['./table-data-representation.component.css']
})
export class TableDataRepresentationComponent implements OnInit {

  @Input() data;
  @Input() Columnsdata;
  @Input() sorting;
  @Input() search;
  @Output() sort = new EventEmitter();
  ascending: boolean;

  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = this.data;
  }

  onclick(event: any, item) {
    console.log(item);
    this.sort.emit({event: item});
  }

  sortingMethod(item) {
    console.log(item);
    const key = item;
    this.ascending = !this.ascending;
    const direction = this.ascending ? 1 : -1;
      this.data.sort(function(a, b): any {
      if ( a[key] < b[key]) {
        return -1 * direction;
      }
    if (a[key] > b[key]) {
      return 1 * direction;
    }
    return 0;
  });
 }

 includesStr(values, str) {
   console.log(str);
   console.log(values);
  return values.map(function (value) {
    return String(value).toLowerCase();
  }).find(function (value) {
    return value.includes(str);
  });
}


searchedTextChanged(eventArgs, value) {
    console.log(eventArgs);
     console.log(value);
    const text = value ;
    console.log(this.items);
     this.items = this.data.filter(item => {
      console.log(item);
      return this.includesStr(Object.values(item), text);
    });
 }

  }


