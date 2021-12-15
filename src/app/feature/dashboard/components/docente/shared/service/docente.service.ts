import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Docente } from '../model/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Docente[]>(
      `${environment.endpoint}/docente/listar-todo`,
      this.http.optsName('Todas los Docentes')
    );
  }

  public crear(Docente: Docente) {
    return this.http.doPost<Docente, any>(
      `${environment.endpoint}/docente/crear`,
      Docente,
      this.http.optsName(' Crear y Actualiar Docente')
    );
  }

  public eliminar(Docente: Docente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/docente/eliminar/${Docente.id}`,
    this.http.optsName('eliminar perfil'));
  }
}
