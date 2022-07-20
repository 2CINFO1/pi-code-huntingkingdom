import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLayoutComponent} from "./layouts/user-layout/user-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import('./views/user/home/home.module').then(m => m.HomeModule)
      }, {
        path: 'sign_in',
        loadChildren: () => import('./views/user/user-login/user-login.module').then(m => m.UserLoginModule)
      }, {
        path: 'sign_up',
        loadChildren: () => import('./views/user/user-register/user-register.module').then(m => m.UserRegisterModule)
      }, {
        path: 'events',
        loadChildren: () => import('./views/user/user-events/user-events.module').then(m => m.UserEventsModule)
      }, {
        path: 'blogs',
        loadChildren: () => import('./views/user/user-blogs/user-blogs.module').then(m => m.UserBlogsModule)
      }, {
        path: 'maps',
        loadChildren: () => import('./views/user/user-maps/user-maps.module').then(m => m.UserMapsModule)
      }, {
        path: 'products',
        loadChildren: () => import('./views/user/user-products/user-products.module').then(m => m.UserProductsModule)
      },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {
        path: 'login',
        loadChildren: () => import('./views/admin/admin-login/admin-login.module').then(m => m.AdminLoginModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
