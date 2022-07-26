import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Blog} from "../../models/blog/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  url: String = 'http://localhost:3000/blogs'

  constructor(private http: HttpClient) { }

  listBlogs() {
    return this.http.get<Blog[]>(`${this.url}`)
  }

  addBlog(blog: Blog) {
    return this.http.post(`${this.url}/add`, blog)
  }

  deleteBlogs(blogID: String) {
    return this.http.delete(`${this.url}/${blogID}`)
  }

  searchBlogs(blogID: String) {
    return this.http.get<Blog>(`${this.url}/search/${blogID}`)
  }


  updateBlog(blogID: String ,blog: Blog) {
    return this.http.put(`${this.url}/${blogID}`, blog)
  }



}
