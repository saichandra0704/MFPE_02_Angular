import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../constants/ApiRoutes';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private _http: HttpClient) { }

  GetQuotes(bVal: number, pVal: number):Observable<Quote[]> {
    return this._http.get<Quote[]>(`${ApiRoutes.GetQuotes}businessValue=${bVal}&propertyValue=${pVal}`);
  }
}
