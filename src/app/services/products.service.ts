import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  addProduct(data:products){
    // console.log('service called');
   return this.http.post('http://localhost:3000/products',data)
    
  }
  prodList(){
    return this.http.get<products[]>('http://localhost:3000/products')
  }
  searchProducts(query:string){
    return this.http.get<products[]>('http://localhost:3000/products?q=$(query)')
  }
  //for serch product service
}
