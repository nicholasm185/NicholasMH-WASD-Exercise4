import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit {
  username;
  password;

  constructor(
    private route: ActivatedRoute,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      this.password = this.loginService.getPassword();
    });
  }

}
