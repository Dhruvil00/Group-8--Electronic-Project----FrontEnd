import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ApiService } from './services/api.service';
import { UsersService } from './services/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductdetailComponent } from './productdetail/productdetail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxPaginationModule } from 'ngx-pagination';

import { CategoryListComponent } from './category-list/category-list.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
  
    ProductsComponent,
       HeaderComponent,
       HomeComponent,
       ProductdetailComponent,
       CategoryListComponent,
       CartComponent,
       FooterComponent,
       AdminloginComponent,
       AdminproductComponent,
       DashboardComponent,
       DialogComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    // NgxPaginationModule,
     MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
   Ng2SearchPipeModule
   
    
    
  ],
  providers: [ProductService,ApiService,UsersService],
  bootstrap: [AppComponent, ProductService]
})
export class AppModule { }
