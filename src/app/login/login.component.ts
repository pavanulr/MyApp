import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
  constructor(private router: Router) { }
username: string;
password: string;
checked:boolean;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin' && this.checked==true){
     this.router.navigate(['employee']);
    }else {
      //alert("Invalid credentials");
      this.router.navigate(['pagenotfound']);
    }
  }
}
