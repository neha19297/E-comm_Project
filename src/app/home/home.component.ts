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
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    // this.product.prodList().subscribe((result)=>{
    //   console.log(result);
    //   this.productList=result;
      
    }
  }


