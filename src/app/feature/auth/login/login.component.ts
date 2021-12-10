import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Token } from '../model/Token';
import { AuthService } from '../service/auth.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token: Token = null;
  public formUser: FormGroup;
  private encPass: string = 'ESTRATEGIA.UFPS-332817';
  private textoEncriptado: string;

  constructor(protected authService: AuthService, protected fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  public loginUser() {
    this.authService.login(this.formUser.value).subscribe(
      (token) => {
        localStorage.setItem('token', token.token);
        this.textoEncriptado = CryptoJS.AES.encrypt('sesion-activa', this.encPass.trim()).toString();
        localStorage.setItem('maxell', this.textoEncriptado);
        this.token = token;
        console.log(this.sesionActiva());

        this.router.navigate(['/dashboard', 'materia', 'listar'])
      },
      ({ error }) => {
        this.textoEncriptado = CryptoJS.AES.encrypt('no sea sapo parcerito', this.encPass.trim()).toString();
        localStorage.setItem('maxell', this.textoEncriptado);
        Swal.fire({
          title: 'Error!',
          text: error.mensaje,
          icon: 'error',
          confirmButtonText: 'Listo'
        });
        throw new Error(error.mensaje);
      }
    );
  }

  public sesionActiva() {
    return this.token != null? true : false;
   }

}
