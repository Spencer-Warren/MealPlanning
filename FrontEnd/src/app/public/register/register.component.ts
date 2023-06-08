import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modles/User';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  encryptedPassword!: string;

  constructor(private fb: FormBuilder, private router: Router, private service: RESTAPIService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl <string> ('', [Validators.required, Validators.email]),
      password: new FormControl <string> ('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl <string> ('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (this.registerForm.valid && this.passwordMatch) {
      let user: User = new User(0, this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.email);
      this.service.registerUser(user).subscribe(
        (response: any) => {
          this.success();
        }
      );
    }
  }

  success() {
    alert("Registration successful! You can now log in.");
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }

  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }
  
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get passwordMatch() {
    return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }

}
