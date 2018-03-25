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
  private list : boolean = true;
  private Detail_User : boolean = false;
  
  constructor(private _userService: UserService) {  
  }

  ngOnInit() {
    this.list = true;
    this.Detail_User = false;
    this._userService.getUser().subscribe( user => {this.user_detail=user; console.log(user)}), error => {
      console.log(error);
    }
  }

  follower_list(currentuser){    
    //alert(currentuser);
    this.list = true;
    this.Detail_User = false;
    this._userService.getFollowers(currentuser).subscribe( user => {this.user_detail=user; console.log(user)}), error => {
      console.log(error);
    }

  }
  detail_user(userdata){
    this.list = false;
    this.Detail_User = true;
    this._userService.userDetail(userdata).subscribe( user => {this.user_detail=user; console.log(user)}), error => {
      console.log(error);
    }
  }

}
