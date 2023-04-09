import { Component,OnInit } from '@angular/core';
import { User } from '../SharedClassesAndTypes/User';
import { EnrollService } from '../Services/enroll.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  methods:string[]=["facbook","twitter","google"]
  userModel=new User("","","","","");
  constructor(private enrollService:EnrollService){
    
  }

  ngOnInit(): void {
    
  }
  submitData(){
    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
    
    localStorage.setItem(this.userModel.name,JSON.stringify(this.userModel));

  }

}
