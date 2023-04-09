import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {IPost} from '../SharedClassesAndTypes/IPost'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _url:string="https://jsonplaceholder.typicode.com/posts";
  posts!: IPost[];
  errorMessage: any;
  constructor(private http:HttpClient) { 

  }

  GetAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }
}
