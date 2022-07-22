import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  
    constructor(private userService: UserService, private route: ActivatedRoute) { }
  
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
  
  }