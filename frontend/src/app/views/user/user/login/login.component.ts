import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
