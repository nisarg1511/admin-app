import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', '../../auth-form-style.scss'],
  host: {
    class: 'col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6'
  }
})
export class SignupPageComponent implements OnInit {
  constructor(private authservice: AuthService, private router: Router, private userService: UserService) { }

  adminRegistration: FormGroup;

  ngOnInit() {
    this.iniForm();
  }

  onSubmit() {
    this.authservice.signUp(this.adminRegistration.value.email, this.adminRegistration.value.password).then(
      (credentials) => {
        credentials.user?.updateProfile({ displayName: this.adminRegistration.value.user_name }).then(
          (x) => {
            const user = this.adminRegistration.value;
            user.user_id = credentials.user.uid;
            user.created_at = new Date();
          }).then(() => this.router.navigate(['/dashboard']));
      });
  }

  private iniForm() {
    this.adminRegistration = new FormGroup({
      'user_name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
    });
  }



}
