import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Blog} from "../../../../models/blog/blog";
import {BlogService} from "../../../../services/blogs/blog.service";


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blog: Blog;
  public blogList: Blog[];
  public myDate = new Date();
  constructor(private blogService: BlogService, private router: Router) { }

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

  update(_id: String) {
    console.log(_id)
    this.router.navigate(['/blogs/update', _id])
  }

  getBlogDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['blogs/details', _id])
  }

}
