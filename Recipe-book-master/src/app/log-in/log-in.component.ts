import { Component, OnInit } from '@angular/core';
import { mockUser } from '../mock-users';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  logedin: boolean = false;
  constructor() { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit() {
  }

  onSubmit() {
    if(mockUser.email == this.loginForm.value.email && mockUser.password == this.loginForm.value.password){
      this.logedin = true;
      return;
    }
  }
}
