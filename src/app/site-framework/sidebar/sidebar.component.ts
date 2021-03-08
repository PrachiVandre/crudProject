import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/product/products.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  categoryList:any;

  constructor(private _productservice:ProductsService) { }

  ngOnInit(): void {
    this._productservice.getCategories().subscribe(data=>{
        this.categoryList = data;
    });
  }

}
