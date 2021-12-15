import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  private textoEncriptado: string;
  private encPass: string = 'ESTRATEGIA.UFPS-332817';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public logout() {
    this.textoEncriptado = CryptoJS.AES.encrypt('no sea sapo parcerito', this.encPass.trim()).toString();
    localStorage.setItem('maxell', this.textoEncriptado);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.router.navigate(['/auth', 'login'])
  }
}
