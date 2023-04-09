
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProduct} from '../SharedClassesAndTypes/IProduct'

import { EnrollService } from '../Services/enroll.service';
import { User } from '../SharedClassesAndTypes/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string="";
  password:string="";
  errorMessage: any;
  userModel = new User('','','','','');
  user:any;

  constructor(private enrollService:EnrollService){
   

  }
 
  ngOnInit(): void {
   
    
    
  
  }
  login(){
    this.user = localStorage.getItem(this.userModel.name);
    if(this.user != null) {
    this.notify(this.userModel.name)
    }

  }
  notify(name:string){
    alert("welcome "+name)

  }
}
