import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {IUser} from '../SharedClassesAndTypes/IUser'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url:string="https://jsonplaceholder.typicode.com/users";
  users!: IUser[];
  errorMessage: any;
  constructor(private http:HttpClient) { 

  }

  GetAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }

}
