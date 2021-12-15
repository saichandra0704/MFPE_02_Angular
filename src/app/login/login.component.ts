import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Member } from '../member';
import { MemberDetails } from '../member-details';

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

  login(){
    this.errMsg='';
    this.loginService.loginMember(this.member).subscribe(data => {

      const memberDetails = data as MemberDetails
      localStorage.setItem("token", memberDetails.token)
      localStorage.setItem("username",this.member.username)
      this.router.navigate(['home']);
    }, error=>{
      if(error.error.hasOwnProperty('message'))
        this.errMsg = error.error.message
      else
        this.errMsg = "Error Occurred, Retry!"
    })
  }

}
