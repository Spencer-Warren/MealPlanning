import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RESTAPIService } from '../service/restapi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  profilePicture!: SafeResourceUrl;

  constructor(private account: AccountService, private api:RESTAPIService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProfilePicture();
  }

  getProfilePicture() {
    this.api.getProfilePicture().subscribe((data: any) => {
      let picture: File = new File([data.body], "profilePicture.png", { type: data.type } );
      let url = URL.createObjectURL(picture);
      this.profilePicture = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    );
  }

  get isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    this.account.logout();
  }
}
