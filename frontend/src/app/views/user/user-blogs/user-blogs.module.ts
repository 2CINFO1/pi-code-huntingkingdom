import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogsRoutingModule } from './user-blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserBlogsRoutingModule
  ]
})
export class UserBlogsModule { }
