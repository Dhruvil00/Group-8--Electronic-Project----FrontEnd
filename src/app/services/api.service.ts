import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  http:HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  public getAllproducts(){
return this.http.get("http://localhost:3000/get");

  }
  }