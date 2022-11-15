import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../data-type';

// import { Observable } from 'rxjs';
// import `rxjs/add/operator/catch`;
// import `rxjs/add/operator/throw`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  addProduct(data: products) {
    console.log('service called');
    return this.http.post(`http://localhost:3000/products`, data);
  }
  productList() {
    return this.http.get<products[]>(`http://localhost:3000/products`);
  }
  searchProducts(query: string) {
    return this.http.get<products[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }
  getProduct(id: string) {
    return this.http.get<products[]>(`http://localhost:3000/products/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
