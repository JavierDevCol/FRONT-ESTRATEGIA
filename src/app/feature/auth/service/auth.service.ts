import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Credenciales } from '../model/Credenciales';
import { Token } from '../model/Token';

@Injectable()
export class AuthService {
  constructor(protected http: HttpService) {}

  public login(crdenciales: Credenciales) {
    return this.http.doPost<Credenciales, Token>(
      `${environment.endpoint}/login`,
      crdenciales,
      this.http.optsName(' Login ')
    );
  }
}
