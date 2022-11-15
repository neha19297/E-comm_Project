import { Component, OnInit } from '@angular/core';
import { products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productList:undefined | products[]
productMsg:undefined | string;
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    this.list();
    }
    deleteProduct(id: number) {
      this.product.deleteProduct(id).subscribe((result) => {
        if (result) {
          this.productMsg = 'Product is deleted';
  
           this.list();
        }
      });
      setTimeout(() => {
        this.productMsg = undefined;
      }, 3000);
    }
    list() {
      this.product.productList().subscribe((result) => {
        if (result) {
          this.productList = result;
        }
      });
    }
  }


