import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

import {LoginService} from '../login.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  updateData() {
    const firstname = (document.getElementById('firstnamefield') as HTMLInputElement).value;
    window.alert(firstname);
    this.loginService.credential.user.fullName = firstname;
    this.loginService.updateData(this.loginService.credential.user);
  }

}
