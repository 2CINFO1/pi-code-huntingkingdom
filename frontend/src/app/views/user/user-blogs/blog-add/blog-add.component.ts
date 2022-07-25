import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog/blog';
import {BlogService} from "../../../../services/blogs/blog.service";



@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  blog: Blog;
  public blogList: Blog[];



  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blog = new Blog();
    this.getBlogList()
  }

  getBlogList() {
    this.blogService.listBlogs().subscribe((response: Blog[]) => {
      this.blogList = response;
      console.log(response)
    })
  }

  delete(id: String) {
    this.blogService.deleteBlogs(id).subscribe(
      ()=>{this.getBlogList()}
    )
  }

 save() {
  console.log(this.blog)
     this.blogService.addBlog(this.blog).subscribe(
      ()=>{this.getBlogList()}
    );
  }

}







