import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { User } from '../SharedClassesAndTypes/User';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../SharedClassesAndTypes/IUser';
@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  _url:string="http://localhost:4200/register";
  constructor(private http:HttpClient) { }

  enroll(user:User)
  {
    //http call
   return this.http.post(this._url,user);
  }
  getAllusers()
  {
    return this.http.get<User[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }
}
