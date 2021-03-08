import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteId :any;
  deleteProd :any;
  constructor( private activatedRoute : ActivatedRoute, private productservice : ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.deleteId = data.id;
    })
    this.productservice.deleteProduct(this.deleteId).subscribe(deletedata=>{
      this.deleteProd = deletedata;

      if(deletedata){
        alert("Yout product has been deleted successfully");
      }
      else{
        alert("Something went wrong");
      }
    })
  }

}
