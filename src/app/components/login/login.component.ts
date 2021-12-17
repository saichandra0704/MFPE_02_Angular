import { Member } from './../../member';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  member: Member  = {
    username: '',
    password: ''
  }

  errMsg: string = ''

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.Authenticate(this.member)
      .subscribe(
        res => {
          this.loginService.LoginAgent(res, this.member.username);
        },
        err => {
          console.log(err);
          this.errMsg = "Username or Password is Incorrect";
        }
      )
    }
  }
