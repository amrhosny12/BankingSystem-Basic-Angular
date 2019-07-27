import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UserURL } from '../models/urls/userUrl';

const httpOptions = {
    headers : new HttpHeaders ({
    'Content-type' : 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userURL = new UserURL();

  getUserData(username:string, password:string):Observable<any> {
    return this.http.get(this.userURL.get_userUrl() + '/' + username + '/' + password);
  }



 

}
