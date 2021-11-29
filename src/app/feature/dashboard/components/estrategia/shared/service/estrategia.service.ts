import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Estrategia } from '../model/Estrategia';

@Injectable({
  providedIn: 'root'
})
export class EstrategiaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Estrategia[]>(
      `${environment.endpoint}/Estrategia/listar`,
      this.http.optsName('Todas los Estrategias')
    );
  }

  public crear(estrategia: Estrategia) {
    return this.http.doPost<Estrategia, any>(
      `${environment.endpoint}/estrategia/crear`,
      estrategia,
      this.http.optsName(' Crear y Actualiar Estrategia')
    );
  }

  public eliminar(Estrategia: Estrategia) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/Estrategia/eliminar/${Estrategia.id}`,
    this.http.optsName('eliminar perfil'));
  }
}
