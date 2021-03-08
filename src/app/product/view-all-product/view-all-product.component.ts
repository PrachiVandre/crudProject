import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList:any;
  constructor(private _productservice:ProductsService) { }

  ngOnInit(): void {
    debugger;
    this._productservice.getAllProducts().subscribe(data=>{
        this.productList = data;
    });
  }

}
