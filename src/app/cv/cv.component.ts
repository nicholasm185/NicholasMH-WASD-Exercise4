import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';
import {element} from 'protractor';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  data;
  sk1p;
  sk2p;
  sk3p;
  // sk1style = {
  //   width: this.sk1p + '%'
  // };
  // sk2style = {
  //   width: this.sk2p
  // };
  // sk3style = {
  //   width: this.sk3p
  // };

  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.data = this.loginService.user$.subscribe(
      data => {this.sk1p = (data.sk1p * 10 + '%');
               this.sk2p = (data.sk2p * 10 + '%');
               this.sk3p = (data.sk3p * 10 + '%'); }
    );
  }

  buttonPress() {
    console.log(this.sk1p);
    console.log(this.sk2p);
    console.log(this.sk3p);
  }

}
