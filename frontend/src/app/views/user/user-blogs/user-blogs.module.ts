import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogsRoutingModule } from './user-blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import {FormsModule} from "@angular/forms";
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent,
    BlogAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserBlogsRoutingModule
  ]
})
export class UserBlogsModule { }
