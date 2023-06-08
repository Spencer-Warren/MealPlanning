import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modles/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {

  url: string = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    }),
    observe: 'response' as 'response'

  };

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/register', user, this.httpOptions);
  }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/login', user, this.httpOptions);
  }


}
