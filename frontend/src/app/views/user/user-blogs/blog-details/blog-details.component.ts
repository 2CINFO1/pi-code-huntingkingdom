import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  blog_id: string;
  public myDate = new Date();


  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.blog_id = params['id']);
    this.blogService.listBlogs().subscribe((response: Blog[]) => {
      this.blogList = response;
      console.log(response)
    })
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

  getBlogDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['blogs/details', _id])
  }

}
