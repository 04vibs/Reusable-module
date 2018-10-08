import { Coldata } from './../usercol';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getColdata() {
    return Coldata;
  }
  getUserdata() {
    return this.http.get(this.baseUrl);
  }
}
