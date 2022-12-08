import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog/blog';
import { BlogService } from 'src/app/services/blogs/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {


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


    getBlogDetails(_id: String) {
      console.log(_id)
      this.router.navigate(['blogs/details', _id])
    }

  }



