import { Component, OnInit } from '@angular/core';
import { products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  addProductMessage:string|undefined;
  // productList:undefined | products[]
  constructor(private product:ProductsService) { }

  ngOnInit(): void {


  }
  submit(data: products) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
        // notification message when product created
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}