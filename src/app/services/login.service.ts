import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Member } from '../models/member';
import { Router } from '@angular/router';
import { ApiRoutes } from '../constants/ApiRoutes'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _url = ApiRoutes.LoginRoute

  token = localStorage.getItem("Authorization");
  
  isLoggedIn = (this.token == null || this.token == "") ? false : true;

  constructor(private _http: HttpClient, private router: Router) { }

  Authenticate(agent: Member) {
    return this._http.post<any>(this._url, agent);
  }

  LoginAgent(res: any, agent: string) {
    localStorage.setItem("Authorization", res.token);
    localStorage.setItem("Agent", agent);
    this.isLoggedIn = true
    this.router.navigate([''])
  }

  Logout() {
    localStorage.removeItem("Authorization")
    localStorage.removeItem("Agent");
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  GetAgent() {
    return localStorage.getItem("Agent") || "Sai Chandra";
  }
}
