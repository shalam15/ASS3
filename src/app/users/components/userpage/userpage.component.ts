import { Component, OnInit } from '@angular/core';
import { Users } from '../../users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../users/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: Users
  id: string

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router ) {
    this.id = route.snapshot.paramMap.get("id")
    this.user = this.userService.getUser(this.id)
   }
   goBack(): void {
    this.router.navigate(['/'])
}

  ngOnInit() {
  }

}
