import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { TableBlogsComponent } from './blogs/table-blogs/table-blogs.component';

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: 'table', component: TableBlogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBlogsRoutingModule { }
