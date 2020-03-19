import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';
import {element} from 'protractor';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  sk1p;
  sk2p;
  sk3p;

  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    // this.sk1p = this.loginService.user$.subscribe()
  }

}
