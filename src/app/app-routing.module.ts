import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { NotesComponent } from './notes/notes.component';



const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {
    path:'products',
    component:ProductsComponent,
    children:[
     {path:'ProductWithoutDiscount',component:ProductWithoutDiscountComponent},
     {path:'ProductWithDiscount',component:ProductWithDiscountComponent}
    ]
   },
  {path:'products',component:ProductsComponent},
  {path:'home',component:ProductsComponent},
  {path:'Users',component:UsersComponent},
  {path:'Posts',component:PostsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'loginR',component:LoginReactiveFormComponent},
  {path:'registerR',component:RegisterReactiveFormComponent},
  {path:'notes',component:NotesComponent},
  {path:'comments/:id',component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
