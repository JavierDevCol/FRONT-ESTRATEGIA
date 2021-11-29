import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Clase } from '../model/Clase';

@Injectable()
export class ClaseService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Clase[]>(
      `${environment.endpoint}/clase/listar`,
      this.http.optsName('Todas los Clases')
    );
  }

  public crear(clase: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/crear`,
      clase,
      this.http.optsName(' Crear y Actualiar Clase')
    );
  }

  public eliminar(clase: Clase) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clase/eliminar/${clase.id}`,
    this.http.optsName('eliminar perfil'));
  }
}
