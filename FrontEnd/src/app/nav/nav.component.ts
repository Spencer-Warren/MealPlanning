import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private account: AccountService) { }

  get isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    this.account.logout();
  }

}
