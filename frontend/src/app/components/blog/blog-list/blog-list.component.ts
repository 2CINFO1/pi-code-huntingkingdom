import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog/blog';
import { BlogsService } from 'src/app/services/blog/blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogList: Blog[];
  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogService.listBlogs().subscribe((response: Blog[]) => {
      this.blogList = response;
      console.log(response)
    })
  }



}
