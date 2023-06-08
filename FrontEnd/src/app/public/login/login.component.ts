import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modles/User';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  encryptedPassword: string = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      let loginUser = new User(0, this.loginForm.value.username, this.loginForm.value.password,"","","");
      // Wait for the login to complete
      let success: boolean = await this.accountService.login(loginUser);
      if (success) {
        this.router.navigate(['/calendar']);
      }
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
