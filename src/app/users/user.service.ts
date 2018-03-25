import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Headers} from '@angular/http'
import'rxjs/add/operator/map';
@Injectable()
export class UserService {

  private username : string =  "dheerajprogrammer";
  
      constructor (private _http:Http){
          console.log("Github Service is ready...");          
      }
      getUser(){
          return this._http.get("https://api.github.com/users?since=135")
          .map(res => res.json())
      }
      
      getFollowers(name){
        return this._http.get("https://api.github.com/users/"+name+"/followers")
        .map(res => res.json())
    }
    userDetail(name){
      return this._http.get("https://api.github.com/users/"+name)
      .map(res => res.json())
  }

}
