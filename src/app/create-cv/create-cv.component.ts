import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {LoginService} from '../login.service';
import {async} from 'rxjs/internal/scheduler/async';
import {UserData} from '../user-data';

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
    const userData: UserData = {};
    const fullName = this.cvForm.get('fullName').value;
    const gender = this.cvForm.get('gender').value;
    const number1 = this.cvForm.get('number').value;
    const shortDesc = this.cvForm.get('shortDesc').value;
    const longDesc = this.cvForm.get('longDesc').value;
    const skill1 = this.cvForm.get('skill1').value;
    const skill2 = this.cvForm.get('skill2').value;
    const skill3 = this.cvForm.get('skill3').value;
    const sk1p = this.cvForm.get('sk1p').value;
    const sk2p = this.cvForm.get('sk2p').value;
    const sk3p = this.cvForm.get('sk3p').value;
    const acheivement1 = this.cvForm.get('acheivement1').value;
    const ac1desc = this.cvForm.get('ac1desc').value;
    const acheivement2 = this.cvForm.get('acheivement2').value;
    const ac2desc = this.cvForm.get('ac2desc').value;
    const acheivement3 = this.cvForm.get('acheivement3').value;
    const ac3desc = this.cvForm.get('ac3desc').value;
    const edu1 = this.cvForm.get('edu1').value;
    const edu2 = this.cvForm.get('edu2').value;
    const edu3 = this.cvForm.get('edu3').value;
    const edu1desc = this.cvForm.get('edu1desc').value;
    const edu2desc = this.cvForm.get('edu2desc').value;
    const edu3desc = this.cvForm.get('edu3desc').value;
    window.alert(this.loginService.credential.user.uid);
    userData.fullName = fullName;
    userData.gender = gender;
    userData.number = number1;
    userData.shortDesc = shortDesc;
    userData.longDesc = longDesc;
    userData.skill1 = skill1;
    userData.skill2 = skill2;
    userData.skill3 = skill3;
    userData.sk1p = sk1p;
    userData.sk2p = sk2p;
    userData.sk3p = sk3p;
    userData.acheivement1 = acheivement1;
    userData.ac1desc = ac1desc;
    userData.acheivement2 = acheivement2;
    userData.ac2desc = ac2desc;
    userData.acheivement3 = acheivement3;
    userData.ac3desc = ac3desc;
    userData.edu1 = edu1;
    userData.edu2 = edu2;
    userData.edu3 = edu3;
    userData.edu1desc = edu1desc;
    userData.edu2desc = edu2desc;
    userData.edu3desc = edu3desc;
    this.loginService.updateData(userData);
  }

}
