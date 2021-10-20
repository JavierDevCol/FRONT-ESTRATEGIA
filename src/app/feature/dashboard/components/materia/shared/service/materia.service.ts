import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { environment } from "src/environments/environment";
import { Materia } from "../model/Materia";

@Injectable()
export class MateriaService {

constructor(protected http: HttpService) {}

public consultar() {
  return this.http.doGet<Materia[]>(`${environment.endpoint}/aula/listar`, this.http.optsName('Todas las materias'));
}

}
