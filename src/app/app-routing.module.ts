import { CartComponent } from './cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DashboardComponent } from './../app/dashboard/dashboard.component';
import { DialogComponent } from './../app/dialog/dialog.component';
import { AdminloginComponent } from '../app/adminlogin/adminlogin.component';


const routes: Routes = [
  {
     path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'adminlogin', component:AdminloginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'adminproduct',component: AdminproductComponent
  },
  {path: 'home' , component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path : 'product', component: ProductsComponent},
  {path : 'productdetail/:id', component: ProductdetailComponent},
  {path : 'category/:id', component : CategoryListComponent},
  {path:'cart', component: CartComponent},
  
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
