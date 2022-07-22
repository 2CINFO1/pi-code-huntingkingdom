import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService,private router:Router ) { }

  ngOnInit(): void {
  }

  addUser(f: any) {
    this.userservice.addUser(f).subscribe(()=>{
      console.log(f.value)
      this.router.navigate(['/login'])

    })
  }

}
