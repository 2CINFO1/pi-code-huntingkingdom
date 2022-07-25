import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog/blog';
import { BlogService } from 'src/app/services/blogs/blog.service';

@Component({
  selector: 'app-table-blogs',
  templateUrl: './table-blogs.component.html',
  styleUrls: ['./table-blogs.component.css']
})
export class TableBlogsComponent implements OnInit {
  blog: Blog;
  public blogList: Blog[];
  title:any;
  p: number=1;

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

  search() {

  }

}
