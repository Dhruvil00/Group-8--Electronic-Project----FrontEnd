import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id:any;
activeroute: ActivatedRoute;
api:ProductService;
productdetail:any[]=[];

  constructor(activeroute: ActivatedRoute,api:ProductService) {
this.activeroute = activeroute;
this.api=api
}
ngOnInit(): void {
// this.name = this.activeroute.snapshot.paramMap.get('title');
this.id = this.activeroute.snapshot.paramMap.get('id');
this.api.getdata(this.id)
.subscribe((response:any)=>{
  
this.productdetail=response;
console.log(response);
},(error)=>{
console.log(error)
})
}
}