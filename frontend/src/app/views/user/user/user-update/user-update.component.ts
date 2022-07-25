import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: any
  user:any
  constructor(private userservice: UserService,private router:Router, private activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.params['id']
    this.userservice.getUser(this.id) .subscribe((data)=>{
      this.user=data
    })
  }
  Updateuser(f:any)
  {
    console.log(f)
return this.userservice.updateUser(this.id,f).subscribe(()=>{
  this.router.navigate(['/user/profile', this.id])
})
  }

}
