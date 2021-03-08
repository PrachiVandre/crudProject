import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any){

    // console.log(form.value);

    let newProduct = {
      id:20,
      prod_name: form.value.prod_name,
      category_id: form.value.category_id,
      description: form.value.description,
      product_image:'',
      price: form.value.price,
      is_available:form.value.is_available,
      rating: form.value.rating,
      reviews:form.value.reviews,
      product_color:form.value.color,
      
  };
  // console.log(newProduct);

  this.productService.createProduct(newProduct).subscribe(data=>{
    console.log(data);
  });


  }

}
