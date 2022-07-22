import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    FormsModule
  ]
})
export class UserRegisterModule { }
