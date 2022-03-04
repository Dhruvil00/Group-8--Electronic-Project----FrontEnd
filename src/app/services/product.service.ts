import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http:HttpClient;

  constructor(http: HttpClient) {

    this.http = http;


  }
  public getAllproducts(){
return this.http.get("http://localhost:3000/api/product");



  }  
  public getdata(id:number){
    return this.http.get(`http://localhost:3000/api/product/detail/${id}`);
  }

   public getAllcategory(){
return this.http.get("http://localhost:3000/api/product/category");
   }

   public getcategory(id:number){
    return this.http.get(`http://localhost:3000/api/product/category/${id}`);
  }


 



}