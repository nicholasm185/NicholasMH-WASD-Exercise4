import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickLogin() {
    this.loginService.sumbitData(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    this.router.navigate(['/createCV', this.loginForm.controls.username.value]);
    // window.alert(this.loginForm.controls.username.value + this.loginForm.controls.password.value);
  }

}
