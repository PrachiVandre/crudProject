import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId = "0";
  proddetails : any;
  constructor(private activatedRoute: ActivatedRoute,private productservice : ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    })
    this.productservice.viewProduct(this.productId).subscribe(proddata=>{
        this.proddetails = proddata;
    })
  } 

}
