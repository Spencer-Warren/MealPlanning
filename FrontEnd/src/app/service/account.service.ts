import { Injectable } from '@angular/core';
import { User } from '../modles/User';
import { RESTAPIService } from './restapi.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  profilePicture!: Subject<any>;

  constructor(private api: RESTAPIService, private router: Router, private sanitizer: DomSanitizer) { }

  async login(user: User){
    this.api.loginUser(user).subscribe(
      data => {
        if (data.status === 200) {
          alert("Login successful!");
          this.updateUserInfo(data.body, user.userPassword);
          this.router.navigate(['/calendar']);
        }
        else {
          alert("Login failed!");
        }
      }
    );
  }

  updateUserInfo(user: User, password?: string) {
    sessionStorage.setItem('user', JSON.stringify(user));
    if (password) {
      sessionStorage.setItem('token', this.getAuthenticationToken(user.username, password || ''));
    }
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  deleteProfile() {
    let shouldDelete = confirm("Are you sure you want to delete your profile?");
    if (!shouldDelete) {
      return;
    }
    this.api.deleteUser(JSON.parse(sessionStorage.getItem('user') || '{}')).subscribe(
      data => {
        if (data.status === 200) {
          alert("Profile deleted!");
          this.logout();
          this.router.navigate(['/login']);
        }
        else {
          alert("Profile deletion failed!");
        }
      }
    );
  }


  getAuthenticationToken(username: string, password: string) {
    return 'basic ' + btoa(username + ':' + password);
  } 

  get isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

}
