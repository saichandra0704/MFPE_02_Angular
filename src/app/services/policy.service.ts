import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../constants/ApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private _http: HttpClient) { }

  GetPolicyMaster(id: number) {
    return this._http.get(`${ApiRoutes.GetPolicyMaster}ConsumerId=${id}&PropertyId=${id}`);
  }

  CreatePolicy(payload: any) {
    return this._http.post(ApiRoutes.CreatePolicy, payload)
  }

  IssuePolicy(payload: any) {
    return this._http.post(ApiRoutes.IssuePolicy, payload)
  }

  GetPolicy(id: number) {
    return this._http.get(`${ApiRoutes.GetPolicy}PolicyId=${id}&ConsumerId=${id}`)
  }
}
