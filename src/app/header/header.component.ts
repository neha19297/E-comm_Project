import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  searchResult:undefined|products[];
  constructor(private route: Router, private products:ProductsService) { }
  
  ngOnInit(): void {
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.products.searchProducts(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }
   hideSearch(){
    this.searchResult=undefined;
   }
   redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
submitSearch(val:string){
  console.log(val);
  this.route.navigate(['search/$(val)'])
}
}