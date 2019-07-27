import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

    UserID:string;
    Password:string;
    
    server_error = false;
    unauthenticated = false;

  ngOnInit() {}

  onSubmit(){
    this.userService.getUserData(this.UserID, this.Password).subscribe( response => {
      try{
        //console.log(this.userService.getUserData(this.UserID, this.Password));
        const cis = response;

        if(Number.isInteger(cis)){
          console.log('CIS : ' +  cis);
          sessionStorage.setItem('CIS', cis);
          this.router.navigate(['/profile', cis])
          .catch(error => {
            this.server_error = true;
            console.log(error);
        });
      } else {
        this.unauthenticated = true;
        }
      }catch (ex){
          console.log(ex);
      } 
    })
  }
}