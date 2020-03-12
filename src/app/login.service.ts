import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username;
  password;

  constructor() { }
  sumbitData(username, password) {
    this.username = username;
    this.password = password;
  }
  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }
}
