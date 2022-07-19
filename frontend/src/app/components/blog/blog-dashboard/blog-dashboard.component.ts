import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog/blog';
import { BlogsService } from 'src/app/services/blog/blogs.service';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css']
})
export class BlogDashboardComponent implements OnInit {

  blog: Blog;
  public blogList: Blog[];
  constructor(private blogService: BlogsService) { }

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

  update(id: String): void {
    this.blog._id = id;
    this.blogService.updateBlog(id, this.blog).subscribe()
  }

  // increment(stage: Stage): void {
  //   stage.nbrInteresse++;
  //   this.stageService.updateStage(stage).subscribe()
  // }
}
