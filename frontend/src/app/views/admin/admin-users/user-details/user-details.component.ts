import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  

    user_id: String
    user: User
  
    constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { }
  
    ngOnInit(): void {
      this.user = new User()
      this.route.params.subscribe((params: Params) => this.user_id = params['id']);
      this.getUserDetails()
    }
  
    getUserDetails() {
        this.userService.getUser(this.user_id).subscribe((userDetails) => {
            this.user = userDetails
        })
    }
    ValideUser(f:any)
    {
      console.log(f)
  return this.userService.updateUser(this.user_id,f).subscribe(()=>{
    this.router.navigate(['dashboard/users'])

  })
    }
  
  
  }