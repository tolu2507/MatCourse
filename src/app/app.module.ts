import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './Blogs/blogs/blogs.component';
import { SingleBlogComponent } from './Blogs/single-blog/single-blog.component';
import { PostComponent } from './Blogs/post/post.component';
import { HomeComponent } from './Home/home/home.component';
import { HomepageComponent } from './Home/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsComponent,
    SingleBlogComponent,
    PostComponent,
    HomeComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
