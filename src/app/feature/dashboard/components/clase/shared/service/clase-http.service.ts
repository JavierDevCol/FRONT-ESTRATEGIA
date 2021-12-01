import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Clase } from '../model/Clase';

@Injectable({
  providedIn: 'root'
})
export class ClaseHttpService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Clase[]>(
      `${environment.endpoint}/clase`,
      this.http.optsName('Todas las clases')
    );
  }

  public crear(materia: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/asignar-materia-clase`,
      materia,
      this.http.optsName(' Crear y Actualiar Clase')
    );
  }

  public asignarDocenteMateriaClase(materia: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/asignar-docente-materia-clase`,
      materia,
      this.http.optsName(' Actualizar Docente')
    );
  }

  public asignarEstratetgiaClase(materia: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/asignar-estrategia-clase`,
      materia,
      this.http.optsName(' Actualizar Estrategia')
    );
  }

  public asignarEstudianteClase(materia: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/asignar-estudiante-clase`,
      materia,
      this.http.optsName(' Actualizar Estudiante')
    );
  }

  public asignarMateriaClase(materia: Clase) {
    return this.http.doPost<Clase, any>(
      `${environment.endpoint}/clase/asignar-materia-clase`,
      materia,
      this.http.optsName(' Actualizar Materia')
    );
  }


  public eliminar(clase: Clase) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clase/eliminar/${clase.id}`,
    this.http.optsName('eliminar clase'));
  }
}
