import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../constants/ApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private _http: HttpClient) { }

  CreateBusinessProperty(bp: any) {
    return this._http.post(ApiRoutes.CreateBusinessProperty, bp);
  }

  ViewBusinessProperty(bpId: number) {
    return this._http.get(ApiRoutes.GetBusinessProperty + bpId);
  }

  UpdateBusinessProperty(bp: any) {
    return this._http.put(ApiRoutes.UpdateBusinessProperty, bp);
  }

}
