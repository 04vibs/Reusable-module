import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.css']
})
export class TableSortComponent implements OnInit {

  constructor() { }
  @Input() data;
  ascending: boolean;
  items: any[];
  ngOnInit() {

  }

  sort(eventArgs, item) {
    this.items = this.data;
    console.log(this.items);
    console.log(this.data);
    console.log(eventArgs);
    console.log(item);
    this.ascending = !this.ascending;
    const direction = this.ascending ? 1 : -1;
    const key: any = eventArgs.event;
    console.log(key);
   return this.data.sort(function(a, b): any {
          if ( a[key] < b[key]) {
            return -1 * direction;
          }
        if (a[key] > b[key]) {
          return 1 * direction;
        }
        return 0;
      });
    }

}
