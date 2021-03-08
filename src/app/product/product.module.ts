import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProdByDateComponent } from './view-all-prod-by-date/view-all-prod-by-date.component';
import { ViewAllProdByCategoryComponent } from './view-all-prod-by-category/view-all-prod-by-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent, 
    CreateProductComponent, 
    ViewProductComponent, 
    ViewAllProductComponent, 
    UpdateProductComponent, 
    DeleteProductComponent, 
    ViewAllProdByDateComponent, ViewAllProdByCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
