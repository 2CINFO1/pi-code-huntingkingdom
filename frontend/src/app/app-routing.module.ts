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
        path: 'user',
        loadChildren: () => import('./views/user/user/user.module').then(m => m.UserModule)
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
    path: 'dashboard', component: AdminLayoutComponent, children: [
      {
        path: 'blogs',
        loadChildren: () => import('./views/admin/admin-blogs/admin-blogs.module').then(m => m.AdminBlogsModule)
      }
      ,{
        path: 'store',
        loadChildren: () => import('./views/admin/admin-store/admin-store.module').then(m => m.AdminStoreModule)
      }
      ,{
        path: 'events',
        loadChildren: () => import('./views/admin/admin-events/admin-events.module').then(m => m.AdminEventsModule)
      }
      ,{
        path: 'maps',
        loadChildren: () => import('./views/admin/admin-maps/admin-maps.module').then(m => m.AdminMapsModule)
      }
      ,{
        path: 'users',
        loadChildren: () => import('./views/admin/admin-users/admin-users.module').then(m => m.AdminUsersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
