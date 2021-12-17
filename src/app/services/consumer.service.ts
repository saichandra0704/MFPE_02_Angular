import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../constants/ApiRoutes'

@Injectable({
  providedIn: 'root'
})

export class ConsumerService {

  constructor(private _http: HttpClient) { }

  CreateCustomer(cb: any) {
    return this._http.post(ApiRoutes.CreateCustomerBusiness, cb)
  }

  GetConsumerBusiness(id: number) {
    return this._http.get(ApiRoutes.GetCustomerBusiness+id);
  }

  UpdateConsumerBusiness(consumerBusiness: any) {
    return this._http.put(ApiRoutes.UpdateCustomerBusiness, consumerBusiness)
  }

}

