import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {IProduct} from '../SharedClassesAndTypes/IProduct'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  _url:string="/assets/Data/products.json";
  products!: IProduct[];
  errorMessage: any;
  constructor(private http:HttpClient) { 

  }

  GetAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }
  GetProductById(id:number){
    this.GetAllProducts().subscribe(
          productData=>{
           this.products=productData;
         },
         error=>{
           this.errorMessage=error;
     } )
     for(var item of this.products){
      if(item.ID===id){
        return item
      }
     }
     return null ;
    
  }
  
 
  
}
