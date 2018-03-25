import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers :[UserService]
})
export class UsersComponent implements OnInit {
  private user_detail : string;
  constructor(private _userService: UserService) {  
  }

  ngOnInit() {
    this._userService.getUser().subscribe( user => {this.user_detail=user; console.log(user)}), error => {
      console.log(error);
  }
  }

}
