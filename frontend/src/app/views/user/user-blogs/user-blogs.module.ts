import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogsRoutingModule } from './user-blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import {FormsModule} from "@angular/forms";
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent,
    BlogAddComponent,
    BlogHomeComponent,
    BlogUpdateComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    UserBlogsRoutingModule,


  ]
})
export class UserBlogsModule { }
