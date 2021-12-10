import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  private encPass: string = 'ESTRATEGIA.UFPS-332817';
  private textoDesencriptado: string;

  constructor(protected router: Router) { }

  canActivate() {
    console.log("paso por el guard perro sapo");
    let text = localStorage.getItem('maxell');
    this.textoDesencriptado = CryptoJS.AES.decrypt(text.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    if (this.textoDesencriptado === 'sesion-activa') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
