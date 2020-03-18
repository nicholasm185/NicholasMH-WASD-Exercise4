import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {LoginService} from '../login.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCVComponent implements OnInit {
  cvForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    shortDesc: new FormControl('', Validators.required),
    longDesc: new FormControl('', Validators.required),
    skill1: new FormControl('', Validators.required),
    skill2: new FormControl('', Validators.required),
    skill3: new FormControl('', Validators.required),
    sk1p: new FormControl(),
    sk2p: new FormControl(),
    sk3p: new FormControl(),
    acheivement1: new FormControl(),
    ac1desc: new FormControl(),
    acheivement2: new FormControl(),
    ac2desc: new FormControl(),
    acheivement3: new FormControl(),
    ac3desc: new FormControl(),
    edu1: new FormControl(),
    edu2: new FormControl(),
    edu3: new FormControl(),
    edu1desc: new FormControl(),
    edu2desc: new FormControl(),
    edu3desc: new FormControl(),
  });

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
