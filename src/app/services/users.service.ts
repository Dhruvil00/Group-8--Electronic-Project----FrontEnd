import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // registered at root module
})
export class UsersService {
  baseUrl:string = "http://localhost:3000";
  constructor(
    private http:HttpClient,
    private router: Router) {

  }
   postAllUsers(){
     console.log("within service")
     return this.http.get(`${this.baseUrl}/Electronic/admin_table`);
   }

   public postAuthUser(newLogin: { email: string; password: string }) {
    this.http.post(`${this.baseUrl}/login`,newLogin).subscribe((response) => {
      console.log(response);
      // only navigates to dashboard page; if user requested logs in with correct credentials
       this.router.navigateByUrl('/adminproduct');
    });
  }
  
  postProduct(data:{}){
    return this.http.post(`${this.baseUrl}/add`, data);
  }
}








