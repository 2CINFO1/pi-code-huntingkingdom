import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBlogsRoutingModule } from './admin-blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { TableBlogsComponent } from './blogs/table-blogs/table-blogs.component';


@NgModule({
  declarations: [
    BlogsComponent,
    TableBlogsComponent
  ],
  imports: [
    CommonModule,
    AdminBlogsRoutingModule
  ]
})
export class AdminBlogsModule { }
