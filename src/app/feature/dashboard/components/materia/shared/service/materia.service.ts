import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Materia } from '../model/Materia';

@Injectable()
export class MateriaService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Materia[]>(
      `${environment.endpoint}/aula/listar`,
      this.http.optsName('Todas las materias')
    );
  }

  public crear(materia: Materia) {
    return this.http.doPost<Materia, any>(
      `${environment.endpoint}/aula/crear`,
      materia,
      this.http.optsName(' Crear y Actualiar Materia')
    );
  }
}
