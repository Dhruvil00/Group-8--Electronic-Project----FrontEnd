import { DialogComponent } from './../dialog/dialog.component';
import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent  {
    constructor (private dialog : MatDialog){

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
        
    });
  }
}

