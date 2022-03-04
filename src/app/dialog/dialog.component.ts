import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder ,private user : UsersService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      Category: ['',Validators.required],
      productName: ['',Validators.required],
      Price: ['',Validators.required],
      Discount: ['',Validators.required],
      Image: ['',Validators.required],
      Description : ['',Validators.required]
    })
  }
  addProduct(){

    this.productForm.value.Price =
     this.productForm.value.Price - ((this.productForm.value.Price * this.productForm.value.Discount)/ 100); // discount

    if(this.productForm.valid){
      this.user.postProduct(this.productForm.value)
      .subscribe({
        next:(res) =>{ 
         // IF its success this will display product added msg 
          alert ("Product added Successfully")
          this.productForm.reset(); // this will reset the form 
          this.dialogRef.close('save'); // this will close the form once product gets add
        },
        error:(err)=>{
          console.log(err) /// if its thowing error it will display error msg
          alert ("Error while addind the product")
        }
      })
      }
    }
  }

