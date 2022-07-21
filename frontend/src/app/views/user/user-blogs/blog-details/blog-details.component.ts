import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog/blog';

import {BlogService} from "../../../../services/blogs/blog.service";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
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
    this.blogService.addBlog(this.blog).subscribe(
      ()=>{this.getBlogList()}
    );
  }

}
