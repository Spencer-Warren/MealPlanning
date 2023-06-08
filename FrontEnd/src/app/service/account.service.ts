import { Injectable } from '@angular/core';
import { User } from '../modles/User';
import { RESTAPIService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private api: RESTAPIService) { }

  async login(user: User): Promise<any> {
    this.api.loginUser(user).subscribe(
      data => {
        console.log(data);
        console.log(data.status);
        if (data.status === 200) {
          console.log("Login successful!");
          this.updateUserInfo(data.body);
          return true;
        }
        return false;
      },
      error => {
        alert("Login failed. Please try again.");
        return false;
      }
    );
  }

  updateUserInfo(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', this.getAuthenticationToken(user.username, user.userPassword));
  }


  get isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

  getAuthenticationToken(username: string, password: string) {
    return 'basic ' + btoa(username + ':' + password);
  }
}
