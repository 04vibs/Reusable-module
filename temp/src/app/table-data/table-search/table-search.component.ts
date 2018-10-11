import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  @Input() data;
  @Input() result;
  items: any[];
  constructor() { }
  ngOnInit() {
    this.items = this.data;
  }

  includesStr(values, str) {
    return values.map(function (value) {
      return String(value).toLowerCase();
    }).find(function (value) {
      return value.includes(str);
    });
  }

  TextSearch( eventArgs) {
    //  console.log(eventArgs);
      console.log(eventArgs);
      const text = eventArgs ;
       this.items = this.data.filter(item => {
        console.log(item);
        return this.includesStr(Object.values(item), text);
      });
    }

}
