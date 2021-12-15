import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = 'https://localhost:44380/api/Auth/Login'

  constructor(private http: HttpClient) { }

  public loginMember(member: Member):Observable<any> {
    return this.http.post(this.baseUrl, member,);
  }
}
