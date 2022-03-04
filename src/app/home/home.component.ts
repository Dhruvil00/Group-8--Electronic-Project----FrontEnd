import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:string[]=[];
id:any;
activeroute: ActivatedRoute;
categoryDetails:any[]=[];

  
  _msgservice:ProductService
constructor( activeroute: ActivatedRoute,_msgservice: ProductService ) {
  this.activeroute = activeroute;
this._msgservice = _msgservice
    

   }
categoryList:any[]=[];
  ngOnInit() {
this._msgservice.getAllcategory()
.subscribe((response:any)=>{
this.categoryList=response.data;
console.log(response);

       

    },(error)=>{

      console.log(error)

    })
    

 

  }
  



}