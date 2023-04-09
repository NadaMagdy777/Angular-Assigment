import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../SharedClassesAndTypes/IComment';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  postid!:any
  _url:string="https://jsonplaceholder.typicode.com/posts/";
  errorMessage: any;
  constructor(private http:HttpClient) { }
  
  GetAllComments(postid:any):Observable<IComment[]>
  {
    this.postid=postid
    this._url=this._url+this.postid+"/comments";
    console.log(this._url)
    
    console.log(this.http.get<IComment[]>(this._url))
    return this.http.get<IComment[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
      
    }));
  }

}
