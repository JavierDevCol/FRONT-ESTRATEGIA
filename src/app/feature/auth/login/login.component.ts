import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(protected authService: AuthService, protected fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  public loginUser() {
    console.log(this.formUser.value);
    this.authService.login(this.formUser.value).subscribe(
      (token) => {
        localStorage.setItem('token', token.token);
        this.router.navigate(['/dashboard', 'materia', 'listar'])
       }
    );
  }

}
