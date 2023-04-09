import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProduct} from '../SharedClassesAndTypes/IProduct'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 

  productList!:IProduct[]
  @Output() childEvent = new EventEmitter();

  constructor() { 
    /* this.productList=[{ID:1,Img:"assets\\shose.jpg",Name:"shose",Price:700,Quantity:20},
    {ID:2,Img:"assets\\camera.jpg",Name:"camera3d",Price:100,Quantity:30},
    {ID:3,Img:"assets\\watch.jpg",Name:"watchProMax",Price:50,Quantity:100},
    {ID:4,Img:"assets\\watch2.jpg",Name:"DigitalWatch",Price:150,Quantity:50},
    {ID:5,Img:"assets\\lump.jpg",Name:"lumpNilion",Price:500,Quantity:10},
    {ID:6,Img:"assets\\shose2.jpg",Name:"Nola Shose",Price:300,Quantity:60}]
  */}

  ngOnInit(): void {
  }

  sendData()
  {
    this.childEvent.emit(this.productList);
  }

  sayWelcome()
  {
    console.log("Welcome im child")
  }

}
