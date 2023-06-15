import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modles/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {

  url: string = "http://MealPlanning-env.eba-wnnbtw72.us-east-1.elasticbeanstalk.com/api";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    }),
    observe: 'response' as 'response'
  };

  httpOptionsFile = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  };

  get user(): User {
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/register', user, this.httpOptions);
  }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/login', user, this.httpOptions);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete<any>(this.url + '/user', { headers: this.httpOptions.headers, observe: 'response', body: user });
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(this.url + '/user', user, this.httpOptions);
  }



  getMeals(): Observable<any> {
    return this.http.get<any>(this.url + '/meal/user/' + this.user.userID, this.httpOptions);
  }

  createMeal(meal: any): Observable<any> {
    meal.user = this.user;
    return this.http.post<any>(this.url + '/meal', meal, this.httpOptions);
  }
  
  updateMeal(meal: any): Observable<any> {
    meal.user = this.user;
    return this.http.put<any>(this.url + '/meal', meal, this.httpOptions);
  }

  deleteMeal(meal: any): Observable<any> {
    meal.user = this.user;
    return this.http.delete<any>(this.url + '/meal', { headers: this.httpOptions.headers, body: meal});
  }



  createProfilePicture(profilePicture: any) : Observable<any> {
    return this.http.post<any>(this.url + "/profile/" + this.user.userID, profilePicture, this.httpOptionsFile);
  }

  getProfilePicture(): Observable<any> {
    return this.http.get<Blob>(this.url + "/profile/" + this.user.userID, { observe: 'response', responseType: 'blob' as 'json'});
  }



  getMealEvents(): Observable<any> {
    return this.http.get<any>(this.url + '/mealEvent/user/' + this.user.userID, this.httpOptions);
  }

  createMealEvent(mealEvent: any): Observable<any> {
    return this.http.post<any>(this.url + '/mealEvent', mealEvent, this.httpOptions);
  }

  updateMealEvent(mealEvent: any): Observable<any> {
    return this.http.put<any>(this.url + '/mealEvent', mealEvent, this.httpOptions);
  }

  deleteMealEvent(mealEvent: any): Observable<any> {
    return this.http.delete<any>(this.url + '/mealEvent', { headers: this.httpOptions.headers, body: mealEvent});
  }

}
