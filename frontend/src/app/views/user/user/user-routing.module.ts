import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: 'sign_in', component: LoginComponent},
  {path: 'sign_up', component: RegisterComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'update/:id', component: UserUpdateComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
