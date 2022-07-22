import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    FormsModule
  ]
})
export class UserLoginModule { }
