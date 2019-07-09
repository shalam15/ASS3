import { Injectable } from '@angular/core';

import { Users } from './users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  users: Users[] = [
    {
      id: 1,
      firstName: 'Abdulsalam',
      lastName: 'Ajayi',
      email: 'aajayi2@student.gsu.edu',
      addresses: [
        {
          addressLine1: '100 white house',
          state: 'WA',
          zip: '30321'
        },
        {
          addressLine2: '200 congress road',
          state: 'NY',
          zip: '40111'
        }
      ]

    },
    {
      id: 2,
      firstName: 'Abdulmumin',
      lastName: 'Olayinka',
      email: 'oyinka3@student.gsu.edu',
      addresses: [
        {
          addressLine1: '99 wassup bro street',
          state: 'GA',
          zip: '30156'
        },
        {
          addressLine2: '811 house road',
          state: 'NY',
          zip: '31246'
        }
      ]

    },
    {
      id: 3,
      firstName: 'Ousman',
      lastName: 'Diallo',
      email: 'doiallo4@student.gsu.edu',
      addresses: [
        {
          addressLine1: '990 hey there bro street',
          state: 'GA',
          zip: '56721'
        },
        {
          addressLine2: '911 fire road',
          state: 'NJ',
          zip: '12904'
        }
      ]

    },
    {
      id: 4,
      firstName: 'Ousman',
      lastName: 'Diallo',
      email: 'doiallo4@student.gsu.edu',
      addresses: [
        {
          addressLine1: '990 hey there bro street',
          state: 'GA',
          zip: '56721'
        },
        {
          addressLine2: '911 fire road',
          state: 'NJ',
          zip: '12904'
        }
      ]

    },

  ];



  public getUsers(): any {
    const usersObservable = new Observable(observer =>{
      setTimeout(() =>{
        observer.next(this.users);
      }, 10);
    });
    return usersObservable;
  }

getUser(id) : Users{
  var user = this.users.find(t => t.id == parseInt(id))
  console.log(user);
  return user;
}
seeLength(){
  console.log(this.users.length);

}

}
