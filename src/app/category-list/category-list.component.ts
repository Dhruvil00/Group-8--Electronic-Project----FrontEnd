import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  id:any;
  activeroute: ActivatedRoute;
  api:ProductService;
  productdetail:any[]=[];
  
    constructor(activeroute: ActivatedRoute,api:ProductService) {
  this.activeroute = activeroute;
  this.api=api
  }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    this.api.getcategory(this.id)
    .subscribe((response:any)=>{
      
    this.productdetail=response;
    console.log(response);
    },(error)=>{
    console.log(error)
    })
    }
    }


