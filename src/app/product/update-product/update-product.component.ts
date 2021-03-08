import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId="";
  productdetails:any;
  constructor(private activatedRoute:ActivatedRoute, private productservice:ProductsService ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.productservice.viewProduct(this.productId).subscribe(proddata=>{
        this.productdetails = proddata; // get the existing data of product 
      })

    });
  }

  editProduct(form: any){

    console.log( form);

    const updateProd = {
      id:form.value.id,
      product_name: form.value.prod_name,
      category_id: form.value.category_id,
      description: form.value.description,
      product_image:'',
      price: form.value.price,
      is_available:1,
      rating: form.value.rating,
      reviews:form.value.reviews,
      product_color:form.value.color,

  };
    this.productservice.updateProduct(this.productId, form.value).subscribe(data=>{
      console.log(data);
    });
  
  }

}
