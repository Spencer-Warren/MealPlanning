import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modles/User';
import { AccountService } from 'src/app/service/account.service';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user: any = JSON.parse(sessionStorage.getItem("user")!);
  firstName: string = this.user.firstName;
  lastName: string  = this.user.lastName;
  userEmail: string = this.user.userEmail;
  username: string  = this.user.username;

  file!: File;

  profileForm!: FormGroup;

  constructor(private restAPIService: RESTAPIService, private router: Router, private account: AccountService) {}

  ngOnInit(): void {
    this.profileForm = new FormBuilder().group({
      firstName: new FormControl <string> (this.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      lastName: new FormControl <string> (this.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      userEmail: new FormControl <string> (this.userEmail, [Validators.required, Validators.email]),
      username: new FormControl <string> (this.username, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    });
  }

  onSubmit() {
    if (!this.profileForm.valid) {
     return;
    }
    if (this.file) {
      this.submitProfilePicture();
    }
    this.submitUser();
  }

  submitUser() {
    let user: User = this.user;
    user.firstName = this.profileForm.value.firstName;
    user.lastName = this.profileForm.value.lastName;
    user.userEmail = this.profileForm.value.userEmail;
    user.username = this.profileForm.value.username;

    this.restAPIService.updateUser(user).subscribe((data: any) => {
      this.account.updateUserInfo(user);
      if (this.profileForm.value.username != this.username) {
        alert("You have changed your username. Please log in again.");
        this.account.logout();
        return;
      }
      alert("Profile updated successfully.");
      this.router.navigate(['/profile']);
    });
  }

  submitProfilePicture() {
    let formData = new FormData();
    formData.append("file", this.file);
    this.restAPIService.createProfilePicture(formData).subscribe((data: any) => {
      
    });
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }
}
