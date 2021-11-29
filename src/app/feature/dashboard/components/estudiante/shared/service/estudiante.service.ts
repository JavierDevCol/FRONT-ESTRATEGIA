import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../model/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {


  constructor(protected http: HttpService) { }


  public consultar() {
    return this.http.doGet<Estudiante[]>(
      `${environment.endpoint}/estudiante/listar`,
      this.http.optsName('Todas los Estudiantes')
    );
  }

  public crear(Estudiante: Estudiante) {
    return this.http.doPost<Estudiante, any>(
      `${environment.endpoint}/estudiante/crear`,
      Estudiante,
      this.http.optsName(' Crear y Actualiar Estudiante')
    );
  }

  public eliminar(estudiante: Estudiante) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/estudiante/eliminar/${estudiante.id}`,
    this.http.optsName('eliminar perfil'));
  }
}
