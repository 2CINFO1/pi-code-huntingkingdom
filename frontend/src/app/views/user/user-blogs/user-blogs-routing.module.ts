import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import {BlogsComponent} from "./blogs/blogs.component";

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: 'details', component: BlogDetailsComponent},
  {path: 'add', component: BlogAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogsRoutingModule { }
