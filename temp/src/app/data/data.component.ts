import { IUser } from './../userdata';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

   constructor(private dataservice: DataService) {}


  title = 'REPRESENTING ATM TELLER SQUAD';

  data: IUser;
  Columnsdata: any[];

  sorting: boolean;
  search: boolean;

   getColdata(): void {
     this.Columnsdata = this.dataservice.getColdata();
   }
   getUserdata() {
    this.dataservice.getUserdata()
       .subscribe((response: IUser) => {
         this.data = response;
   });
  }

  ngOnInit() {
     this.getColdata();
     this.getUserdata();
  }

}
