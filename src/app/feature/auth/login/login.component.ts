import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Token } from '../model/Token';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token: Token = null;
  public formUser: FormGroup;

  constructor(protected login: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  public loginUser() {
    console.log(this.formUser.value);
    this.login.login(this.formUser.value).subscribe( (token) => console.log(token));
  }

}
