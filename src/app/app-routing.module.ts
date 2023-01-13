import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './Blogs/blogs/blogs.component';
import { PostComponent } from './Blogs/post/post.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'singleblog', component: PostComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
