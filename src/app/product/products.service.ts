import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../site-framework/categories';
import { IProduct } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private _httpClient:HttpClient) { }

getAllProducts(): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products";
  return this._httpClient.get<IProduct>(productUrl);
}

getCategories(): Observable<ICategory>{
  const categoryUrl = "http://localhost:3000/categories";
  return this._httpClient.get<ICategory>(categoryUrl);
}

createProduct(productBody: any): Observable<IProduct>{
    const productUrl = "http://localhost:3000/products";
    return this._httpClient.post<IProduct>(productUrl, productBody);
}
 
 viewProduct(productId: any): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products/"+ productId;
  return this._httpClient.get<IProduct>(productUrl);
 }

 updateProduct(productId: any, productBody: any): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products/"+ productId;
  return this._httpClient.put<IProduct>(productUrl, productBody);
 }

 deleteProduct(productId: any): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products/"+ productId;
  return this._httpClient.delete<IProduct>(productUrl);
 }

 searchCategoryProduct(categoryId: any): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products?category_id="+ categoryId;
  return this._httpClient.get<IProduct>(productUrl);
 }

 searchDateProduct(dateParam: any): Observable<IProduct>{
  const productUrl = "http://localhost:3000/products/daete="+ dateParam;
  return this._httpClient.get<IProduct>(productUrl);
 }
}
