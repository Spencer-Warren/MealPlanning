import { Injectable } from '@angular/core';
import { User } from '../modles/User';
import { RESTAPIService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private api: RESTAPIService) { }

  login(user: User) {
    this.api.loginUser(user).subscribe(
      data => {
        if (data.status === 200) {
          this.updateUserInfo(data.user);
        }
        else {
          alert("Wrong username or password");
        }
      }
    );
  }

  updateUserInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', this.getAuthenticationToken(user.userName, user.userPassword));
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
