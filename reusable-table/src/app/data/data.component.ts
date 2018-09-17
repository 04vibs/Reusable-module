import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  title = 'REPRESENTING ATM TELLER SQUAD';
  data = [
    { id: 1, name: 'Rahul', phoneno: 123  },
    { id: 2, name: 'Prashant', phoneno: 123},
    { id: 3, name: 'Stuti', phoneno: 123},
    { id: 4, name: 'Harish', phoneno: 999},
  ];

  Columnsdata = [
      { attribute: 'id', value: 'ID'},
      { attribute: 'name', value: 'Name'},
      { attribute: 'phoneno', value: 'PhoneNO'}

  ];
  sorting: boolean;
  search: boolean;

  ngOnInit() {
  }

}
