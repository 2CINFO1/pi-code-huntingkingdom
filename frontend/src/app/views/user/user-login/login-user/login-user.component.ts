import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private userservice: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  Login(f: any)
  {
    this.userservice.Login(f).subscribe(()=>{
      console.log(f.value)
      this.router.navigate(['/'])

    })
  }
}
