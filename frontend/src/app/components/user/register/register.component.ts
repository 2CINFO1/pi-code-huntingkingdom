import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService,private router:Router ) { }

  ngOnInit(): void {
    // this.user = new User()

  }
  addUser(f: any)
  {
    this.userservice.addUser(f).subscribe(()=>{
     console.log(f.value)
      this.router.navigate(['/login'])

    })
  }
 
}


