import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profilePicture!: any;

  constructor(private router: Router, private accountService: AccountService, private api: RESTAPIService, private sanitizer: DomSanitizer) { }

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
