import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProduct} from '../SharedClassesAndTypes/IProduct'
import {ICategory} from '../SharedClassesAndTypes/ICategory'
import {DiscountOffers}from '../SharedClassesAndTypes/DiscountOffers'
import {ProductServicesService}from '../Services/product-services.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discounts:DiscountOffers
  StoreName:string
  StoreLogo:string
  productList!:IProduct[]
  categoryList:ICategory[]
  
  clientName:string
  isPurshed:boolean
  isParentClick:boolean
  @Output() childEvent = new EventEmitter();
  errorMessage: any;

  constructor(private ProductService:ProductServicesService,private router:Router,private activatedRoute:ActivatedRoute){
    this.Discounts=DiscountOffers.NoDiscount;
    this.StoreName="Nada Store"
    this.StoreLogo="assets\\apple-icon.png"
    /* this.productList=[{ID:1,Img:"assets\\shose.jpg",Name:"shose",Price:700,Quantity:20},
    {ID:2,Img:"assets\\camera.jpg",Name:"camera3d",Price:100,Quantity:30},
    {ID:3,Img:"assets\\watch.jpg",Name:"watchProMax",Price:50,Quantity:100},
    {ID:4,Img:"assets\\watch2.jpg",Name:"DigitalWatch",Price:150,Quantity:50},
    {ID:5,Img:"assets\\lump.jpg",Name:"lumpNilion",Price:500,Quantity:10},
    {ID:6,Img:"assets\\shose2.jpg",Name:"Nola Shose",Price:300,Quantity:60}] */
    this.categoryList=[{ID:1,Name:"bages"},{ID:2,Name:"shoses"},{ID:5,Name:"Camera"},{ID:3,Name:"Watches"},{ID:4,Name:"Furniture"}]
    this.clientName="ali"
    this.isPurshed=false
    this.isParentClick=false
    
  }
  ngOnInit(): void {
  }
  sendData()
  {
    this.childEvent.emit(this.productList);
  }
  Buy(){

    this.isPurshed=!this.isPurshed
  }
  gotoProductWithDiscount(){
    this.router.navigate(["ProductWithDiscount"],{relativeTo:this.activatedRoute});
  }
  gotoProductWithoutDiscount(){
    this.router.navigate(["ProductWithoutDiscount"],{relativeTo:this.activatedRoute});
  }
    
  renderValues(){
    this.ProductService.GetAllProducts().subscribe({
      next:data=>this.productList=data,
      error:error=>this.errorMessage=error
    })

    return this.productList
  }
  parentclick(){
    this.isParentClick=!this.isParentClick
  }
  

  




  


}
