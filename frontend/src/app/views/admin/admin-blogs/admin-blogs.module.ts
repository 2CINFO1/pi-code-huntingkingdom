import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBlogsRoutingModule } from './admin-blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    AdminBlogsRoutingModule
  ]
})
export class AdminBlogsModule { }
