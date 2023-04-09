import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProduct} from '../SharedClassesAndTypes/IProduct'

import {ProductServicesService}from '../Services/product-services.service'


@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {
  
  productList!:IProduct[]
  productWDList:IProduct[]=[]
  result:IProduct[]=[]
  
  
  errorMessage: any;

  constructor(private ProductService:ProductServicesService){
   

  }
  ngOnInit(): void {
   
    
    this.ProductService.GetAllProducts().subscribe({
      next:data=>{this.result=data
        for(let product of this.result ) {
          if(product.discount!=="0"){
            this.productWDList.push(product);
    
          }
      
      }
      },
      error:error=>this.errorMessage=error
    })

  
  }
  ngAfterViewInit(): void {
    
    console.log(this.result.length)
    
    
  }
 
}
