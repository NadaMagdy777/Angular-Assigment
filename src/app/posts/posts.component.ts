import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {PostsService}from '../Services/posts.service'
import { IPost } from '../SharedClassesAndTypes/IPost';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent {
  postsList!:IPost[]
  errorMessage: any;
  constructor(private PostsService:PostsService,private router:Router){
   
    
    
  }
  ngOnInit(): void {
    this.PostsService.GetAllPosts().subscribe({
      next:data=>this.postsList=data,
      error:error=>this.errorMessage=error
    })


  }

  ViewComments(post:IPost){
    this.router.navigate(["comments",post.id]);
  }
  
}
