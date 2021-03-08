import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductComponent } from './product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProdByCategoryComponent } from './view-all-prod-by-category/view-all-prod-by-category.component';
import { ViewAllProdByDateComponent } from './view-all-prod-by-date/view-all-prod-by-date.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'view-prod/:id', component: ViewProductComponent },
  { path: 'category/:id', component: ViewAllProdByCategoryComponent },
  { path: 'search-date', component: ViewAllProdByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
