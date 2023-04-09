import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {UsersService}from '../Services/users.service'
import { IUser } from '../SharedClassesAndTypes/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  userList!:IUser[]
  errorMessage: any;
  constructor(private UsersService:UsersService){
    
    
  }
  ngOnInit(): void {
    this.UsersService.GetAllUsers().subscribe({
      next:data=>this.userList=data,
      error:error=>this.errorMessage=error
    })
  }

}
