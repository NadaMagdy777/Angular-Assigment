import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    ProductWithDiscountComponent,
    ProductWithoutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    LoginReactiveFormComponent,
    RegisterReactiveFormComponent,
    NotesComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
