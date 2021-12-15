import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Grupo } from '../model/Grupo';

@Injectable()
export class GrupoService {

  constructor(protected http: HttpService) { }


  public consultar() {
    return this.http.doGet<Grupo[]>(
      `${environment.endpoint}/grupo/listar`,
      this.http.optsName('Todas los Grupos')
    );
  }

  public crear(Grupo: Grupo) {
    return this.http.doPost<Grupo, any>(
      `${environment.endpoint}/grupo/crear`,
      Grupo,
      this.http.optsName(' Crear y Actualiar Grupo')
    );
  }

  public eliminar(Grupo: Grupo) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/grupo/eliminar/${Grupo.id}`,
    this.http.optsName('eliminar perfil'));
  }
}
