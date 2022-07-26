import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog/blog';
import { BlogService } from 'src/app/services/blogs/blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  blog: Blog;
  public blogList: Blog[];
  blog_id: String



  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.blog_id = params['id']);
    this.blogService.searchBlogs(this.blog_id).subscribe((data) => {
      this.blog = data
    })
  }

  update() {
    this.blogService.updateBlog(this.blog_id, this.blog).subscribe(() => {
      this.router.navigate(['/blogs'])
    })
  }

}
