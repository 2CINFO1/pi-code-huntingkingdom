import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user_id: String
  user: User

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router ) { }

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
  updateprofile(id: any){
    this.router.navigate(['user/update/'+id])
  }

}
