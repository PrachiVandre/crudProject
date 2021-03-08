import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-view-all-prod-by-category',
  templateUrl: './view-all-prod-by-category.component.html',
  styleUrls: ['./view-all-prod-by-category.component.css']
})
export class ViewAllProdByCategoryComponent implements OnInit {
  searchCategory:any;
  productList:any;
  constructor(private activatedRoute : ActivatedRoute, private _productservice: ProductsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
        this.searchCategory = data.id;
      
        this._productservice.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
          this.productList = categoryData;
        })
    })
  } 

}
