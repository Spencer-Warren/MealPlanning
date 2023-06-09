import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router, private accountService: AccountService) { }

  get user() {
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }
  deleteProfile() {
    this.accountService.deleteProfile();
  }
}
