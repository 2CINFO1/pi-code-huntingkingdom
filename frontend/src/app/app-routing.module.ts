import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';
import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: 'BlogDashBoard', component : BlogDashboardComponent},
  {path: 'blogs', component : BlogListComponent},
  {path: 'blogs/add', component : BlogAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }