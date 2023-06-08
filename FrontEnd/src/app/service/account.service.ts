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
        if (data.status === 200) {
          console.log(data);
          this.updateUserInfo(data.user);
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
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', this.getAuthenticationToken(user.username, user.userPassword));
  }


  get isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  getAuthenticationToken(username: string, password: string) {
    return 'basic ' + btoa(username + ':' + password);
  }
}
