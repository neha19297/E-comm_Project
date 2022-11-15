import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | products; //custom pipe

  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductsService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        console.log(result);
        // this.productData= result;
      });
  }
  //
}
