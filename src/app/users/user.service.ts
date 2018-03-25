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
          return this._http.get("http://api.github.com/users/"+this.username)
          .map(res => res.json())
      }

}
