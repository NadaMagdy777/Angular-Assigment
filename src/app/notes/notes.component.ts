import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Namevalidation } from '../customValidation/NameValidator';
import {IProduct} from '../SharedClassesAndTypes/IProduct'
import {ProductServicesService}from '../Services/product-services.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  NotesForm:FormGroup;
  ProductList:IProduct[]=[];
  checkedvalue:boolean=false;
  productdiscount:number=0;
  productname:string='';
  errorMessage: any;
  constructor(private fb:FormBuilder,public productservice:ProductServicesService){
    this.NotesForm=this.fb.group({
      name:['',[Validators.required,Namevalidation(/admin|adminstrator/)]],
      product:[''],
      checkdiscount:[''],
      discount :[''],
      comment:[''],
      aleternativecomment:this.fb.array([])
    });


  }

  ngOnInit() {
    this.productservice.GetAllProducts().subscribe({
      next:data=>this.ProductList=data,
      error:error=>this.errorMessage=error
    })
   
  }
  
  addAlternativecomment(){
    this.aleternativeComment.push(this.fb.control(''));
  }
  deletecomment(index:any){
    this.aleternativeComment.removeAt(index);

  }
  setDiscountValidation(){
    this.NotesForm.get('checkdiscount')?.valueChanges.subscribe(checkedValue=>{
      this.checkedvalue=checkedValue;
      if(checkedValue)
      {
        this.Discount?.setValidators(Validators.required);
      }
      else
      {
       this.Discount?.clearValidators();
      }
      //upadte dom
      this.Discount?.updateValueAndValidity();
    })
  }
  get Name(){
    return this.NotesForm.get('name');
  }
  get Discount()
  {
    return this.NotesForm.get('discount');
  }

  get Comment()
  {
    return this.NotesForm.get('comment');
  }

  get Product()
  {
    return this.NotesForm.get('product');
  }

  get aleternativeComment()
  {
    return this.NotesForm.get('aleternativecomment') as FormArray;
  }
  submitData(){

  }
}
