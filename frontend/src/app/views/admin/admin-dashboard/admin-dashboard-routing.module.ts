import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogsRoutingModule } from '../admin-blogs/admin-blogs-routing.module';


const routes: Routes = [
  {path: '', component: AdminBlogsRoutingModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminStoreRoutingModule { }
