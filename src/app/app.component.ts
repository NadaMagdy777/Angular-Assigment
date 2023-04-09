import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './SharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularProject';
  @ViewChild(ProductsComponent) child!: ProductsComponent;
  products!:IProduct[]

  getdata(){
    this.products= this.child.renderValues()
    this.child.parentclick()
    
  }
}
