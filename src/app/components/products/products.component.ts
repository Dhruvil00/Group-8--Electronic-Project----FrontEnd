import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name!:string;
  p:number = 1;
  

_msgservice:ProductService

constructor( _msgservice: ProductService, private _cartService: CartService ) {
this._msgservice = _msgservice

    }
productList:any[]=[];
  ngOnInit() {
this._msgservice.getAllproducts()
.subscribe((response:any)=>{
this.productList=response.data;
console.log(response);
},(error)=>{
console.log(error)

    })
    }
addtocart(item: any){
this._cartService.addtoCart(item);
}
  
   

}
