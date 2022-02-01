import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loggedIn;

  @Output() logIn: EventEmitter<boolean> = new EventEmitter();

  username: string = "";

  password: string = "";

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }

  attemptLogin() {
      this.login.login(this.username, this.password).subscribe((response) => {
        this.loggedIn = response;
        this.logIn.emit(this.loggedIn)
      })
  }

  setUsername(userName: string) {
    this.username = userName;
  }

  setPassword(password: string) {
    this.password = password;
  }
}
