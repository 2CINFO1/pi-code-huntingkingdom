import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog/blog';
import { BlogsService } from 'src/app/services/blog/blogs.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blog: Blog;

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blog = new Blog();
  }

  save() {
    this.blogService.addBlog(this.blog);
  }

}
