import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.userService.listUser().subscribe((data) => {
      this.users = data
      console.log(data)
    })
  }
  update(id: any) {
    this.router.navigate(['dashboard/users/details/'+id])

    }
  

  delete(id: any) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUserList()
    })
  }

}
