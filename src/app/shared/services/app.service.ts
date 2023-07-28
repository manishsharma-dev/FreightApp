import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  getUsers() {
    return of([
      {
        'user_id': "1022",
        'user_name': "User A",
        'email': "s@s.com",
        'corporate': "Godfrey Philips",
        'Status': "active"
      },
      {
        'user_id': "2110",
        'user_name': "User B",
        'email': "s2@s2.com",
        'corporate': "Godfrey Philips",
        'Status': "active"
      },
      {
        'user_id': "4411",
        'user_name': "User C",
        'email': "s3@s3.com",
        'corporate': "Godfrey Philips",
        'Status': "active"
      }
    ]);
  }

  getUserLog(){
    return of([
      {
        'user_name': "User A",
        'date': "12/02/2022",
      },
      {
        'user_name': "User B",
        'date': "11/02/2022",
      },
      {
        'user_name': "User C",
        'date': "10/02/2022",
      }
    ])
  }
}
