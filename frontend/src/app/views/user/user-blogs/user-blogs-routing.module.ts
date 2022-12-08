import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import {BlogsComponent} from "./blogs/blogs.component";

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: 'details/:id', component: BlogDetailsComponent},
  {path: 'update/:id', component: BlogUpdateComponent},
  {path: 'add', component: BlogAddComponent},
  {path: 'home', component: BlogHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBlogsRoutingModule { }
