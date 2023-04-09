import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProduct} from '../SharedClassesAndTypes/IProduct'

import {ProductServicesService}from '../Services/product-services.service'

@Component({
  selector: 'app-product-without-discount',
  templateUrl: './product-without-discount.component.html',
  styleUrls: ['./product-without-discount.component.scss']
})
export class ProductWithoutDiscountComponent implements OnInit {
  productList!:IProduct[]
  result:IProduct[]=[]
  productListWOD:IProduct[]=[]
  
  
  errorMessage: any;

  constructor(private ProductService:ProductServicesService){
   
    
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    
    this.ProductService.GetAllProducts().subscribe({
      next:data=>{this.productList=data
        for(var i=0;i<10;i++){
          console.log(i)
        }
        for(let product of this.productList ) {
          if(product.discount==="0"){
            this.productListWOD.push(product);
    
          }
      }},
      error:error=>this.errorMessage=error
    })
    
    
    
  }
   
  

}
