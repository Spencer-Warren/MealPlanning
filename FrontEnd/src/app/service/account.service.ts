import { Injectable } from '@angular/core';
import { User } from '../modles/User';
import { RESTAPIService } from './restapi.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private api: RESTAPIService, private router: Router) { }

  async login(user: User){
    this.api.loginUser(user).subscribe(
      data => {
        if (data.status === 200) {
          alert("Login successful!");
          this.updateUserInfo(data.body);
          this.router.navigate(['/calendar']);
        }
        else {
          alert("Login failed!");
        }
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
