import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';
import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';

const routes: Routes = [
  {path: 'BlogDashBoard', component : BlogDashboardComponent},
  {path: 'blogs', component : BlogListComponent},
  {path: 'blogadd', component : BlogAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
