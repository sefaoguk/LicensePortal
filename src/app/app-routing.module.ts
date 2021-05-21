import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {​​​​​​​​ HomeComponent }​​​​​​​​ from'./home/home.component';
import {​​​​​​​​ LicenseComponent }​​​​​​​​ from'./home/license/license.component';
import {​​​​​​​​ PaymentComponent }​​​​​​​​ from'./home/payment/payment.component';
import {​​​​​​​​ ProductComponent }​​​​​​​​ from'./home/product/product.component';
import {​​​​​​​​ CustomerComponent }​​​​​​​​ from'../app/home/customer/customer.component'
 
const routes: Routes = [
 {​​​​​​​​ path:'home', component:HomeComponent }​​​​​​​​,
 {​​​​​​​​ path:'customer', component:CustomerComponent }​​​​​​​​,
 {​​​​​​​​ path:'license', component:LicenseComponent }​​​​​​​​,
 {​​​​​​​​ path:'payment', component:PaymentComponent }​​​​​​​​,
 {​​​​​​​​ path:'product', component:ProductComponent }​​​​​​​​,
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }