import { Component, OnInit } from '@angular/core';
import { Users } from '../../users.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Users[] = [];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    const usersObservable = this.userservice.getUsers();
    usersObservable.subscribe((usersData: Users[]) =>{
      this.users = usersData;
    });
  }

}
